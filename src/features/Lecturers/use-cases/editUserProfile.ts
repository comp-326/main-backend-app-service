import { ExpressError } from '@exam-cell-common/errors/ExpressError';
import { IUser } from '@exam-cell-features/users/models/interfaces';
import { IUserRepository } from '../interfaces';
import createUser from '../entities';
import validateMongodbId from '@exam-cell-utils/mongo/ObjectId-validator';

export  function makeEditUserProfile ({repository}:{repository:IUserRepository}){
	return async (userId: string, userData: IUser) => {
		if (!userId) {
			throw new ExpressError({
				message: 'User id not provided',
				status: 'error',
				statusCode: 400,
				data: {
					userId: userId
				}
			});
		}
		if (!validateMongodbId(userId)) {
			throw new ExpressError({
				message: 'Please provide a valid user id',
				status: 'error',
				statusCode: 400,
				data: {}
			});

		}
		const existing = await repository.findById(userId);
		
		if(!existing){
			throw new ExpressError({
				message: 'User not found',
				status: 'error',
				statusCode: 404,
				data: {}
			});
		}
		const { getBio, getEmail, getFirstName, getIsActive,getGender, getLastName, getPassword, getProfilePic } = await createUser({ ...existing._doc,...userData });
		const user = await repository.updateById(existing._id, {
			email: getEmail(),
			isActive: getIsActive(),
			firstName: getFirstName(),
			lastName: getLastName(),
			gender: getGender(),
			password: getPassword(),
			bio: getBio(),
			profilePicture: getProfilePic()
		});

		return user;
	};
}