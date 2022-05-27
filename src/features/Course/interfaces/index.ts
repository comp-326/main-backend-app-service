/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable @typescript-eslint/no-explicit-any */

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
