import { DepartmentRepositoryType } from '../repository';
import { ExpressError } from '@exam-cell-common/errors/ExpressError';
import departmentModel from '@exam-cell-features/Department/models';
import validateMongodbId from '@exam-cell-utils/mongo/ObjectId-validator';

export function makeRemoveDepartmentByIdUseCase({
	repository,
}: {
	repository: DepartmentRepositoryType;
}) {
	return async (departmentId: string) => {
		if (!departmentId) {
			throw new ExpressError({
				message: 'Department ID is required',
				status: 'warning',
				statusCode: 400,
				data: {},
			});
		}
		if (!validateMongodbId(departmentId)) {
			throw new ExpressError({
				message: 'Department ID is invalid',
				status: 'warning',
				statusCode: 400,
				data: {},
			});
		}
		const response = await repository.deleteDepartment({
			model: departmentModel,
		})(departmentId);

		return response;
	};
}
