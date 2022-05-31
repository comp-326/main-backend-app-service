import { IDepartment } from './../models/interfaces';
import { departmentModelType } from '../models';

export function createNewDepartment({ model }: { model: departmentModelType }) {
	return async (departmentData: IDepartment) => {
		const department = await model.create(departmentData);

		return department;
	};
}