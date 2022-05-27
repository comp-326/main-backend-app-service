import { IUnit } from '../models/interfaces';
import { createUnitEntity } from './../entities';
import departmentModel from '@exam-cell-features/Department/models';
import facultyModel from '@exam-cell-features/Faculty/models';
import unitModel from '../models';
import { unitRepositoryType } from './../repository/index';

export function makeAddNewUnitUseCase({
	repository,
}: {
	repository: unitRepositoryType;
}) {
	return async (unitData: IUnit) => {
		const { getFaculty, getName, getDepartment, getUnitCode } =
			createUnitEntity(unitData);
		const unit = await repository.createNewUnit({
			unitModel: unitModel,
			facultyModel: facultyModel,
			departmentModel: departmentModel,
		})({
			faculty: getFaculty(),
			name: getName(),
			department: getDepartment(),
			unitCode: getUnitCode(),
		});

		return unit;
	};
}
