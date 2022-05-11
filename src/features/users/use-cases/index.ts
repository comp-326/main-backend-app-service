/* eslint-disable @typescript-eslint/no-explicit-any */
import EventBus from '@backend-service/services/eventBus';
import { ExpressError } from '@backend-service-common/errors/ExpressError';
import { IUser } from '@backend-service-features/users/models/interfaces';
import { JWTPayloadType } from '@backend-service/common/types';
import createUser from '@backend-service-features/users/entities';
import { deleteFile } from '@backend-service-utils/fileSystem';
import entity from '@backend-service-features/users/entities';
import tokenGEN from '@backend-service/utils/jwt/tokenGEN';
import validateMongodbId from '@backend-service-utils/mongo/ObjectId-validator';
import { IUserRepository, IUserUseCases } from '../interfaces';


export class UserUseCase implements IUserUseCases{
	private readonly repository: IUserRepository;

	constructor(repository: IUserRepository){
		this.repository = repository;
	}

	editUserProfilePic=async (userId: string, userData: IUser & {file:Express.Multer.File}) => {
		if(!userId && userData.file) {
			await deleteFile(userData.file.path);
			throw new ExpressError({
				data:{},
				message:'User id not provided',
				status:'error',
				statusCode:400
			});
		}
		if(!validateMongodbId(userId) && userData.file) {
			await deleteFile(userData.file.path);
			throw new ExpressError({
				data:{},
				message:'Please provide a valid user id',
				status:'error',
				statusCode:400
			});
		}

		return {done:userData};
	};

	addNewUser = async (userData: IUser) => {
		const newUser = await entity(userData);
		const existing = await this.repository.findByEmail(newUser.getEmail());
		if(existing) {
			throw new ExpressError({
				message: 'User already exists',
				status: 'warning',
				statusCode: 409,
				data: {
					email: newUser.getEmail()}

			});
		}
		const queue = new EventBus('activateAccount');
		const user = await this.repository.createUser({
			email:newUser.getEmail(),
			firstName:newUser.getFirstName(),
			lastName:newUser.getLastName(),
			password:newUser.getPassword(),
			gender:newUser.getGender(),
			bio:newUser.getBio(),
			isActive:newUser.getIsActive(),
			isDeleted:newUser.getIsDelete(),
			profilePicture:newUser.getProfilePic(),
			role:newUser.getRole()
		});
		await queue.sendToQueue(JSON.stringify({
			name: `${newUser.getFirstName()} ${newUser.getLastName()}`,
			email: newUser.getEmail(),

		}));
			
		return user;
		
	};

	editUserProfile = async (userId: string, userData: IUser) => {
		if(!userId) {
			throw new ExpressError({
				message: 'User id not provided',
				status: 'error',
				statusCode: 400,
				data: {
					userId: userId}
			});
		}
		if(!validateMongodbId(userId)) {
			throw new ExpressError({
				message: 'Please provide a valid user id',
				status: 'error',
				statusCode: 400,
				data: {}
			});
		
		}

		const newUserData = await this.repository.updateById(userId, userData);

		return newUserData;
	};

	listUserById = async (id: string) => {
		if(!id) {
			throw new ExpressError({
				message: 'User id not provided',
				status: 'error',
				statusCode: 400,
				data: {
					userId: id}
			});
		}
		if(!validateMongodbId(id)) {
			throw new ExpressError({
				message: 'Please provide a valid user id',
				status: 'error',
				statusCode: 400,
				data: {}
			});
		}
		const user = await this.repository.findById(id);

		return user;
	};

	listUserByEmail = async (email: string) => {
		if(!email) {
			throw new ExpressError({
				message: 'Email not provided',
				status: 'error',
				statusCode: 400,
				data: {
					email: email}
			});
		}

		const user = await this.repository.findByEmail(email);
		if(!user) {
			throw new ExpressError({
				message: 'User not found',
				status: 'warning',
				statusCode: 404,
				data: {
				}
			});}

		return user;
	};

	listUsers = async ({ limit, offset }: { limit: number; offset: number; }) => {
		const users = await this.repository.find(limit, offset);
		if(users.length === 0) {
			throw new ExpressError({
				message: 'No users found',
				status: 'warning',
				statusCode: 404,
				data: {
					limit,
					offset
				}
			});
		}

		return users;
	};

	activateUserAccount = async (token:string,email: string) => {
		if(!email) {
			throw new ExpressError({
				message: 'Email is required',
				status: 'warning',
				statusCode: 400,
				data: {
					email
				}
			});
		}
		const existing = await this.repository.findByEmail(email);
		if(!existing) {
			throw new ExpressError({
				message: 'User not found',
				status: 'warning',
				statusCode: 404,
				data: {
					email
				}
			});
		}
		if(existing.isActive) {
			throw new ExpressError({
				message: 'User account already activated',
				status: 'warning',
				statusCode: 409,
				data: {
				}
			});
		}
		if(existing.isDeleted) {
			throw new ExpressError({
				message: 'User account has been deleted',
				status: 'warning',
				statusCode: 409,
				data: {
				}
			});
		}
		if(!token) {
			throw new ExpressError({
				message: 'Token is required',
				status: 'warning',
				statusCode: 400,
				data: {
					token
				}
			});
		}
		const {userId}=tokenGEN.decodeToken(token) as unknown as JWTPayloadType;
		if(!userId) {
			throw new ExpressError({
				message: 'Token is invalid',
				status: 'warning',
				statusCode: 400,
				data: {
					token
				}
			});
		}
		if(userId!==existing.id) {
			throw new ExpressError({
				message: 'Token is invalid',
				status: 'warning',
				statusCode: 400,
				data: {
					token
				}
			});
		}

		const updated = await createUser({...existing, isActive: true});
		const user = await this.repository.updateById(existing._id, {
			email: updated.getEmail(),
			isActive:true,
			firstName: updated.getFirstName(),
			lastName: updated.getLastName(),
			gender:updated.getGender(),
			password:updated.getPassword(),
			bio:updated.getBio(),
			profilePicture:updated.getProfilePic()
		});

		return user;
	};

	resetPassword=async (token: string,data:{password:string,confirmPassword:string}) => {
		if(!token) {
			throw new ExpressError({
				message: 'Token is required',
				status: 'warning',
				statusCode: 400,
				data: {
					token
				}
			});
		}
		const {userId}=tokenGEN.decodeToken(token) as unknown as JWTPayloadType;
		if(!userId) {
			throw new ExpressError({
				message: 'Token is invalid',
				status: 'warning',
				statusCode: 400,
				data: {
					token
				}
			});
		}
		const existing  = await this.repository.findById(userId);
		if(!existing) {
			throw new ExpressError({
				message: 'User not found',
				status: 'warning',
				statusCode: 404,
				data: {
					userId
				}
			});
		}
		if(existing.isDeleted) {
			throw new ExpressError({
				message: 'User account has been deleted',
				status: 'warning',
				statusCode: 409,
				data: {
				}
			});
		}
		if(!existing.isActive) {
			throw new ExpressError({
				message: 'User account not activated',
				status: 'warning',
				statusCode: 409,
				data: {
				}
			});
		}
		if(!data.password) {
			throw new ExpressError({
				message: 'Password is required',
				status: 'warning',
				statusCode: 400,
				data: {
				}
			});
		}
		if(!data.confirmPassword) {
			throw new ExpressError({
				message: 'Confirm password is required',
				status: 'warning',
				statusCode: 400,
				data: {
				}
			});
		}
		if(data.password!==data.confirmPassword) {
			throw new ExpressError({
				message: 'Passwords do not match',
				status: 'warning',
				statusCode: 400,
				data: {
				}
			});
		}
		const updated = await createUser({...existing, password: data.password});
		const user = await this.repository.updateById(existing._id, {
			email: updated.getEmail(),
			isActive:updated.getIsActive(),
			firstName: updated.getFirstName(),
			lastName: updated.getLastName(),
			gender:updated.getGender(),
			password:updated.getPassword(),
			bio:updated.getBio(),
			isDeleted:updated.getIsDelete(),
			profilePicture:updated.getProfilePic(),
			role:updated.getRole()
		}
		);
		const queue = new EventBus('resetPassword');
		queue.sendToQueue(JSON.stringify({
			email: user.email,
			firstName: user.firstName,
			lastName: user.lastName,
		}));

		return user;


	};

	changeUserPassword = async (id: string, data: any ) => {
		if(!id) {
			throw new ExpressError({
				message: 'User id not provided',
				status: 'error',
				statusCode: 400,
				data: {
					userId: id}
			});
		}
		if(!validateMongodbId(id)) {
			throw new ExpressError({
				message: 'Please provide a valid user id',
				status: 'error',
				statusCode: 400,
				data: {}
			});
		}
		const existing = await this.repository.findById(id);
		if(!existing) {
			throw new ExpressError({
				message: 'User not found',
				status: 'error',
				statusCode: 404,
				data: {
				}
			});
		}
		if(existing.isDeleted) {
			throw new ExpressError({
				message: 'User account has been deleted',
				status: 'error',
				statusCode: 409,
				data: {
				}
			});
		}
		if(!data.password) {
			throw new ExpressError({
				message: 'Password is required',
				status: 'warning',
				statusCode: 400,
				data: {
					password: data.password
				}
			});
		}
		if(data.password!==data.confirmPassword as any) {
			throw new ExpressError({
				message: 'Passwords do not match',
				status: 'warning',
				statusCode: 400,
				data: {
					password: data.password,
					confirmPassword: data.confirmPassword
				}
			});
		}
		const updated = await createUser({...existing, password: data.password});
		const user = await this.repository.updateById(existing._id, {
			email: updated.getEmail(),
			isActive:updated.getIsActive(),
			firstName: updated.getFirstName(),
			lastName: updated.getLastName(),
			gender:updated.getGender(),
			password:updated.getPassword(),
			bio:updated.getBio(),
			isDeleted:updated.getIsDelete(),
			profilePicture:updated.getProfilePic(),
			role:updated.getRole()
		}
		);
		const queue = new EventBus('resetPassword');
		queue.sendToQueue(JSON.stringify({
			email: user.email,
			firstName: user.firstName,
			lastName: user.lastName,
		}));

		return user;
	};

	softRemoveUser = async (id: string) => {
		const user = await this.repository.softDeleteUser(id);

		return user;
	};

	hardRemoveUser = async (id: string) => {
		const user = await this.repository.deleteById(id);

		return user;
	};

	sendAccountActivationLink = async (email: string) => {
		if(!email) {
			throw new ExpressError({
				message: 'Email is required',
				status: 'warning',
				statusCode: 400,
				data: {
					email
				}
			});
		}
		const existing = await this.repository.findByEmail(email);
		if(!existing) {
			throw new ExpressError({
				message: 'User not found',
				status: 'warning',
				statusCode: 404,
				data: {
					email
				}
			});
		}
		if(existing.isActive) {
			throw new ExpressError({
				message: 'User account already activated',
				status: 'warning',
				statusCode: 409,
				data: {
				}
			});
		}
		const token = await tokenGEN.generateToken({
			email: existing.email,
			userId:existing._id
		});
		const queue=new EventBus('sendActivationLink');
		queue.sendToQueue(JSON.stringify({
			email: existing.email,
			token
		}));

		return existing;
	};

	sendPasswordResetLink = async (email: string) => {
		if(!email) {
			throw new ExpressError({
				message: 'Email is required',
				status: 'warning',
				statusCode: 400,
				data: {
					email
				}
			});
		}
		const existing = await this.repository.findByEmail(email);
		if(!existing) {
			throw new ExpressError({
				message: 'User not found',
				status: 'warning',
				statusCode: 404,
				data: {
					email
				}
			});
		}
		if(!existing.isActive) {
			throw new ExpressError({
				message: 'User account not activated',
				status: 'warning',
				statusCode: 409,
				data: {
				}
			});
		}
		const token = await tokenGEN.generateToken({
			email: existing.email,
			userId:existing._id
		});
		const queue=new EventBus('sendPasswordResetLink');
		queue.sendToQueue(JSON.stringify({
			email: existing.email,
			token
		}));


		return existing;
	};

}