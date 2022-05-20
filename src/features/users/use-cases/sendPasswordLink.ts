import EventBus from '@backend-service/services/eventBus';
import { ExpressError } from '@backend-service/common/errors/ExpressError';
import { IUserRepository } from '@backend-service-features/users/interfaces';
import tokenGEN from '@backend-service/utils/jwt/tokenGEN';

export function makeSendPasswordLink({repository}:{repository:IUserRepository}){
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
		if (!existing.isActive) {
			throw new ExpressError({
				message: 'User account not activated',
				status: 'warning',
				statusCode: 409,
				data: {
				}
			});
		}
	
		const queue = new EventBus('resetPassword');
		const token = await tokenGEN.generateSimpleToken({ userId: existing._id, email: existing.email });
		queue.sendToQueue(JSON.stringify({
			name: `${existing.firstName} ${existing.lastName}`,
			email: existing.email,
			token

		}));


		return existing;
	};

}