import { IStudent } from './../models/interfaces';
import { StudentModelType } from '../models';

export function createNewStudent({ model }: { model: StudentModelType }) {
	return async (studentData: IStudent) => {
		const student = await model.create(studentData);

		return student;
	};
}