import { DepartmentRepositoryType } from '../repository';
import { ExpressError } from '@exam-cell-common/errors/ExpressError';
import { IDepartment } from '../models/interfaces';
import createDepartmentEntity from '../entities';
import departmentModel from '@exam-cell-features/Department/models';
import validateMongodbId from '@exam-cell-utils/mongo/ObjectId-validator';

export function makeEditDepartmentByIdUseCase({
	repository,
}: {
	repository: DepartmentRepositoryType;
}) {
	return async (departmentId: string, departmentData: IDepartment) => {
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
		const existingDepartment = await repository.findDepartmentById({
			model: departmentModel,
		})(departmentId);
		if (!existingDepartment) {
			throw new ExpressError({
				message: 'Department not found',
				status: 'warning',
				statusCode: 404,
				data: {},
			});
		}
		const { getFaculty, getName } = createDepartmentEntity({
			...existingDepartment._doc,
			...departmentData,
		});
		const response = await repository.updateDepartmentById({
			model: departmentModel,
		})(departmentId, {
			faculty: getFaculty(),
			name: getName(),
		});

		return response;
	};
}
