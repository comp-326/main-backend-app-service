import { ILecturer } from './../models/interfaces';
import { LecturerModelType } from '../models';

export function updateLecturerById({ model }: { model: LecturerModelType }) {
	return async (lecturerId: string, lecturerData: ILecturer) => {
		const lecturer = await model.findByIdAndUpdate(
			lecturerId,
			lecturerData,
			{ new: true },
		);

		return lecturer;
	};
}
