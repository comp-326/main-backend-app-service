import { ExpressError } from '@backend-service/common/errors/ExpressError';
import { IUserRepository } from '@backend-service-features/users/interfaces';
import validateMongodbId from '@backend-service/utils/mongo/ObjectId-validator';

export function makeListUserById({repository}:{repository:IUserRepository}){
	return async (id: string) => {
		if (!id) {
			throw new ExpressError({
				message: 'User id not provided',
				status: 'error',
				statusCode: 400,
				data: {
					userId: id
				}
			});
		}
		if (!validateMongodbId(id)) {
			throw new ExpressError({
				message: 'Please provide a valid user id',
				status: 'error',
				statusCode: 400,
				data: {}
			});
		}
		const user= await repository.findById(id);
		if (!user) {
			throw new ExpressError({
				message: 'User not found',
				status: 'error',
				statusCode: 404,
				data: {
					userId: id
				}
			});
		}
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const {password:_docs,...props}=user._doc;

		return props;
	};
} 