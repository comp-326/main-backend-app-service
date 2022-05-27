/* eslint-disable @typescript-eslint/no-explicit-any */

import { ExpressError } from '@exam-cell-common/errors/ExpressError';
import { IStudent } from '../models/interfaces';
import {
	IPassword,
	IUserValidator,
} from '@exam-cell-features/Students/interfaces';

export function makeCreateStudentEntity({
	validator,
	passwordUtil,
}: {
	validator: IUserValidator;
	passwordUtil: IPassword;
}) {
	return async ({
		course,
		department,
		email,
		firstName,
		gender,
		lastName,
		password,
		role,
	}: IStudent) => {
		const { isValidEmail, isValidPassword } = validator;
		const { hashPassword } = passwordUtil;
		if (!isValidEmail(email)) {
			throw new ExpressError({
				message: 'Please provide a valid email',
				statusCode: 400,
				status: 'warning',
				data: {},
			});
		}
		if (!firstName) {
			throw new ExpressError({
				message: 'First name required',
				data: {},
				statusCode: 400,
				status: 'warning',
			});
		}
		if (!lastName) {
			throw new ExpressError({
				message: 'Last name required',
				data: {},
				status: 'warning',
				statusCode: 400,
			});
		}
		if (!password) {
			throw new ExpressError({
				message: 'Password required',
				data: {},
				status: 'warning',
				statusCode: 400,
			});
		}
		if (password && password.length < 50) {
			const { ok, errors } = isValidPassword({
				props: { firstName, lastName, password: password },
				fields: [
					{ fieldName: 'firstName', name: 'First name' },
					{ fieldName: 'email', name: 'Email address' },
					{ fieldName: 'lastName', name: 'Last name' },
				],
			});
			if (!ok) {
				throw new ExpressError({
					message: 'Invalid password',
					statusCode: 400,
					data: errors.replace(/[\t]/, '').trim().split(/\n/),
					status: 'warning',
				});
			}
		}
		if (password && password.length < 50)
			password = await hashPassword(password);

		return Object.freeze({
			getFirstName: () => firstName,
			getLastName: () => lastName,
			getRole: () => (role ? role : 'user'),
			getPassword: () => password,
			getGender: () => gender,
			getEmail: () => email,
			getCourse: () => course,
			getDepartment: () => department,
		});
	};
}
