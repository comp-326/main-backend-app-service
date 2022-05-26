import { ExpressError } from '@exam-cell-common/errors/ExpressError';
import { IUser } from '@exam-cell-features/Users/modelsinterfaces';
import { IPassword, IUserValidator } from '@exam-cell-features/Users/interfaces';

export default function makeCreateUserEntity({
	validator,
	passwordUtil
}: {
	validator: IUserValidator;
	passwordUtil: IPassword;
}){
	return async function createUser({
		email,
		firstName,
		lastName,
		password: userPassword,
		isActive,
		role, bio, gender, isDeleted, profilePicture
	}: IUser){
		const { isValidEmail, isValidPassword } = validator;
		const { hashPassword } = passwordUtil;
		if (!isValidEmail(email)) {
			throw new ExpressError({
				message: 'Please provide a valid email',
				statusCode: 400,
				status: 'warning',
				data: {}
			});
		}
		if (!firstName) {
			throw new ExpressError({
				message: 'First name required',
				data: {},
				statusCode: 400,
				status: 'warning'
			});
		}
		if (!lastName) {
			throw new ExpressError({
				message: 'Last name required',
				data: {},
				status: 'warning',
				statusCode: 400
			});
		}
		if (!userPassword) {
			throw new ExpressError({
				message: 'Password required',
				data: {},
				status: 'warning',
				statusCode: 400
			});
		}
		if (userPassword && userPassword.length < 50) {
			const { ok, errors } = isValidPassword({
				props: { firstName, lastName, password: userPassword },
				fields: [
					{ fieldName: 'firstName', name: 'First name' },
					{ fieldName: 'email', name: 'Email address' },
					{ fieldName: 'lastName', name: 'Last name' }
				]
			});
			if (!ok) {
				throw new ExpressError({
					message: 'Invalid password',
					statusCode: 400,
					data: errors.replace(/[\t]/, '').trim().split(/\n/),
					status: 'warning'
				});
			}
		}
		if (userPassword && userPassword.length < 50)
			userPassword = await hashPassword(userPassword);

		return Object.freeze({
			getFirstName: () => firstName,
			getLastName: () => lastName,
			getBio: () => bio,
			getIsActive: () => (isActive ? isActive : false),
			getRole: () => (role ? role : 'user'),
			getProfilePic: () => profilePicture,
			getPassword: () => userPassword,
			getIsDelete: () => isDeleted,
			getGender: () => gender,
			getEmail: () => email
		});
	};
}
