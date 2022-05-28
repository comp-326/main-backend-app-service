import { ILecturer } from './../models/interfaces';
import { LecturerModelType } from '../models';

export function createNewLecturer({ model }: { model: LecturerModelType }) {
	return async (studentData: ILecturer) => {
		const student = await model.create(studentData);

		return student;
	};
}