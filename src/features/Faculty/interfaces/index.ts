/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { IUser } from '@exam-cell-features/Users/modelsinterfaces';
import { INext,IRequest,IResponse } from '@exam-cell-common/types';


type FilesType =
	| {
			[fieldname: string]: Express.Multer.File[];
	  }
	| Express.Multer.File[]
	| undefined;

export interface IUserRequest {
	params: any;
	body: any;
	query: any;
	headers: any;
	files?: FilesType;
	file?: Express.Multer.File | undefined;
}

export interface IUserRepository {
	createUser: (data: IUser) => Promise<any>;
	findByEmail: (email: string) => Promise<any>;
	findById: (id: string) => Promise<any>;
	find: (limit: number, page: number) => Promise<any>;
	updateById: (id: string, data: IUser) => Promise<any>;
	deleteById: (id: string) => Promise<any>;
	softDeleteUser: (id: string) => Promise<any>;
}

export type PasswordValidatorType = {
	props: { [x: string]: string };
	fields: { fieldName: string; name: string }[];
};

export interface IUserValidator {
	isValidEmail: (email: string) => boolean;
	isValidPassword: (body: PasswordValidatorType) => {
		ok: boolean;
		errors: string;
	};
}

export interface IPassword {
	hashPassword: (password: string) => Promise<string>;
	comparePassword: (password: string, hash: string) => Promise<boolean>;
}


export  interface IUserController {
	softDeleteUser:(req: IRequest, res: IResponse,next:INext) => Promise<any>;
	createUser:(req: IRequest, res: IResponse,next:INext) => Promise<any>;
	deleteUser:(req: IRequest, res: IResponse,next:INext) => Promise<any>;
	findUserByEmail:(req: IRequest, res: IResponse,next:INext) => Promise<any>;
	findUserById:(req: IRequest, res: IResponse,next:INext) => Promise<any>;
	getAccountActivationLink:(req: IRequest, res: IResponse,next:INext) => Promise<any>;
	getPasswordResetLink:(req: IRequest, res: IResponse,next:INext) => Promise<any>;
	activateAccount:(req: IRequest, res: IResponse,next:INext) => Promise<any>;
	findUsers:(req: IRequest, res: IResponse,next:INext) => Promise<any>;
	updateAccount:(req: IRequest, res: IResponse,next:INext) => Promise<any>;
	updateProfilePic:(req: IRequest, res: IResponse,next:INext) => Promise<any>;
	updatePassword:(req: IRequest, res: IResponse,next:INext) => Promise<any>;
}

export type IUserData =
	| 'email'
	| 'dateOfBirth'
	| 'firstName'
	| 'lastName'
	| 'isActive'
	| 'avatar'
	| '_id';

export interface IUserUseCases {

		addNewUser: (userData: IUser) => Promise<any>;
		editUserProfilePic: (userId:string,userData: IUser&{file:Express.Multer.File}) => Promise<any>;
		editUserProfile: (userId:string,userData: IUser) => Promise<any>;
		listUserById: (id: string) => Promise<any>;
		listUserByEmail: (email: string) => Promise<any>;
		listUsers: (query: {
			limit: number;
			offset: number;
			query?: any;
		}) => Promise<any>;
		activateUserAccount: (token:string) => Promise<any>;
		resetPassword: (token:string,data:{
			password:string
			confirmPassword:string
		}) => Promise<any>;
		softRemoveUser: (id:string) => Promise<any>;
		hardRemoveUser: (id:string) => Promise<any>;
		sendAccountActivationLink: (email:string) => Promise<any>;
		sendPasswordResetLink: (email:string) => Promise<any>;
	}
	