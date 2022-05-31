import { LecturerModelType } from '../models';

export function deleteLecturerById({ model }: { model: LecturerModelType }) {
	return async (lecturerId: string) => {
		const entity = await model.findByIdAndUpdate(lecturerId, {
			$set: {
				isDeleted: true,
			},
		});

		return entity;
	};
}
