import { LecturerModelType } from '@exam-cell-features/Lecturers/models';

export function findAllLecturers({ model }: { model: LecturerModelType }) {
	return async () => {
		const lecturers = await model.find({});

		return lecturers;
	};
}
