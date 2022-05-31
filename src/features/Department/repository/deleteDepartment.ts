import { departmentModelType } from '../models';

export function deleteDepartment({ model }: { model: departmentModelType }) {
	return async (departmentId: string) => {
		const entity = await model.findByIdAndUpdate(
			departmentId,
			{
				$set: {
					isDeleted: true,
				},
			},
			{ new: true },
		);

		return entity;
	};
}
