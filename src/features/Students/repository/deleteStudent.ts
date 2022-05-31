import { StudentModelType } from '../models';

export function deleteStudent({ model }: { model: StudentModelType }) {
	return async (studentId: string) => {
		const entity = await model.findByIdAndUpdate(
			studentId,
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
