import { departmentModelType } from '../models';

export function findDepartmentByName({ model }: { model: departmentModelType }) {
	return async (name: string) => {
		const department = await model.findOne({ name });

		return department;
	};
}
