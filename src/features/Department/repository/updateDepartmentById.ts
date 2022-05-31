import { IDepartment } from '../models/interfaces';
import { departmentModelType } from '../models';

export function updateDepartmentById({ model }: { model: departmentModelType }) {
	return async (departmentId: string, departmentData: IDepartment) => {
		const department = await model.findByIdAndUpdate(departmentId, departmentData, {
			new: true,
		});

		return department;
	};
}
