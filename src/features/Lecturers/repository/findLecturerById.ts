import { LecturerModelType } from '../models';

export function findLecturerById({ model }: { model: LecturerModelType }) {
	return async (lecturerId: string) => {
		const lecturer = await model.findById(lecturerId);

		return lecturer;
	};
}
