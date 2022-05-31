import { AdminRepositoryType } from '../repository';
import { ExpressError } from '@exam-cell-common/errors/ExpressError';
import adminModel from '@exam-cell-features/Admin/models';
import validateMongodbId from '@exam-cell-utils/mongo/ObjectId-validator';

export function makeRemoveAdminByIdUseCase({
	repository,
}: {
	repository: AdminRepositoryType;
}) {
	return async (adminId: string) => {
		if (!adminId) {
			throw new ExpressError({
				message: 'Admin id is required',
				status: 'warning',
				statusCode: 400,
				data: {},
			});
		}
		if (!validateMongodbId(adminId)) {
			throw new ExpressError({
				message: 'Admin id is invalid',
				status: 'warning',
				statusCode: 400,
				data: {},
			});
		}
		const response = await repository.deleteAdminById({
			model: adminModel,
		})(adminId);

		return response;
	};
}
