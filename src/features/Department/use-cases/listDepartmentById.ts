import { DepartmentRepositoryType } from '../repository';
import { ExpressError } from '@exam-cell-common/errors/ExpressError';
import departmentModel from '@exam-cell-features/Department/models';
import validateMongodbId from '@exam-cell-utils/mongo/ObjectId-validator';

export function makeListDepartmentByIdUseCase({
	repository,
}: {
	repository: DepartmentRepositoryType;
}) {
	return async (studentId: string) => {
		if (!studentId) {
			throw new ExpressError({
				message: 'Department ID is required',
				status: 'warning',
				statusCode: 400,
				data: {},
			});
		}
		if (!validateMongodbId(studentId)) {
			throw new ExpressError({
				message: 'Department ID is invalid',
				status: 'warning',
				statusCode: 400,
				data: {},
			});
		}
		const response = await repository.findDepartmentById({
			model: departmentModel,
		})(studentId);
		if (!response) {
			throw new ExpressError({
				message: 'Department not found',
				status: 'warning',
				statusCode: 404,
				data: {},
			});
		}

		return response;
	};
}
