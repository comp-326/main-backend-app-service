import { departmentModelType } from '@exam-cell-features/Department/models';

export function findAllDepartments({ model }: { model: departmentModelType }) {
	return async () => {
		const departments = await model.find({});

		return departments;
	};
}
