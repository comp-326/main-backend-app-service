import { departmentModelType } from '../models';

export function findDepartmentById({ model }: { model: departmentModelType }) {
	return async (departmentId: string) => {
		const department = await model.findById(departmentId);

		return department;
	};
}
