import { ILecturer } from './../models/interfaces';
import { LecturerModelType } from '../models';

export function createNewLecturer({ model }: { model: LecturerModelType }) {
	return async (lecturerData: ILecturer) => {
		const lecturer = await model.create(lecturerData);

		return lecturer;
	};
}
