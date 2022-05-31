import { DepartmentRepositoryType } from '../repository';
import { IDepartment } from './../models/interfaces';
import createDepartmentEntity  from '../entities';
import departmentModel from '@exam-cell-features/Department/models';

export function makeAddNewDepartmentUseCase({
	repository,
}: {
	repository: DepartmentRepositoryType;
}) {
	return async (departmentData: IDepartment) => {
		const { getFaculty, getName } = await createDepartmentEntity(
			departmentData,
		);
		const saved = await repository.createNewDepartment({
			model: departmentModel,
		})({
			name: getName(),
			faculty: getFaculty(),
		});

		return saved;
	};
}
