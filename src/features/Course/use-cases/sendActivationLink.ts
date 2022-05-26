import { ExpressError } from '@exam-cell-common/errors/ExpressError';
import { IUserRepository } from '@exam-cell-features/users/interfaces';

export function makeSendAccountActivationLink({ repository }: { repository: IUserRepository }) {
	return async (email: string) => {
		if (!email) {
			throw new ExpressError({
				message: 'Email is required',
				status: 'warning',
				statusCode: 400,
				data: {
					email
				}
			});
		}
		const existing = await repository.findByEmail(email);
		if (!existing) {
			throw new ExpressError({
				message: 'User not found',
				status: 'warning',
				statusCode: 404,
				data: {
					email
				}
			});
		}
		if (existing.isActive) {
			throw new ExpressError({
				message: 'User account already activated',
				status: 'warning',
				statusCode: 409,
				data: {
				}
			});
		}

		return existing;
	};

}