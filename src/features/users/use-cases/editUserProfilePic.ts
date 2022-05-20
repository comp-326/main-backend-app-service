import { ExpressError } from '@backend-service/common/errors/ExpressError';
import { IUser } from '../models/interfaces';
import { IUserRepository } from '../interfaces';
import { deleteFile } from '@backend-service/utils/fileSystem';
import validateMongodbId from '@backend-service/utils/mongo/ObjectId-validator';

export function makeEditProfilePic({repository}:{repository:IUserRepository}){
	return async (userId: string, userData: IUser & { file: Express.Multer.File }) => {
		if (!userId && userData.file) {
			await deleteFile(userData.file.path);
			throw new ExpressError({
				data: {},
				message: 'User id not provided',
				status: 'error',
				statusCode: 400
			});
		}
		if (!validateMongodbId(userId) && userData.file) {
			await deleteFile(userData.file.path);
			throw new ExpressError({
				data: {},
				message: 'Please provide a valid user id',
				status: 'error',
				statusCode: 400
			});
		}
		await repository.updateById(userId,userData);

		return { done: userData };
	};

}