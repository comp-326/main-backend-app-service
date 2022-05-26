import { IDepartment } from '../models/interfaces';
import { createDeparrmentEntity } from './../entities';
import departmentModel from '../models';
import { departmentRepositoryType } from './../repository/index';
import facultyModel from '@exam-cell-features/Faculty/models';

export function makeAddNewDepartmentUseCase({
	repository,
}: {
  repository: departmentRepositoryType;
}) {
	return async (departmentData: IDepartment) => {
		const { getFaculty, getName } = createDeparrmentEntity(departmentData);
		const department = await repository.createNewDepartment({
			departmentModel: departmentModel,
			facultyModel: facultyModel,
		})({
			faculty: getFaculty(),
			name: getName(),
		});

		return department;
	};
}
