/* eslint-disable @typescript-eslint/no-explicit-any */

import { ExpressError } from '@exam-cell-common/errors/ExpressError';
import { IAdmin } from '../models/interfaces';
import {
	IPassword,
	IUserValidator,
} from '@exam-cell-features/Lecturers/interfaces';

export function makeCreateAdminEntity({
	validator,
	passwordUtil,
}: {
	validator: IUserValidator;
	passwordUtil: IPassword;
}) {
	return async ({ email, password, role, lastName, firstName }: IAdmin) => {
		const { isValidEmail, isValidPassword } = validator;
		const { hashPassword } = passwordUtil;
		if (!firstName) {
			throw new ExpressError({
				message: 'First name required',
				status: 'warning',
				statusCode: 400,
				data: {},
			});
		}
		if (!lastName) {
			throw new ExpressError({
				message: 'Last name required',
				status: 'warning',
				statusCode: 400,
				data: {},
			});
		}
		if (!isValidEmail(email)) {
			throw new ExpressError({
				message: 'Please provide a valid email',
				statusCode: 400,
				status: 'warning',
				data: {},
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
				props: { email, password },
				fields: [{ fieldName: 'email', name: 'Email address' }],
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
			getPassword: () => password,
			getEmail: () => email,
			getRole: () => role,
			getFirstName: () => firstName,
			getLastName: () => lastName,
		});
	};
}
