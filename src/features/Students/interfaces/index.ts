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
