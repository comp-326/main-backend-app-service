import { IStudent } from '../models/interfaces';
import { StudentModelType } from '../models';

export function updateStudentById({ model }: { model: StudentModelType }) {
	return async (studentId: string, studentData: IStudent) => {
		const student = await model.findByIdAndUpdate(studentId, studentData, {
			new: true,
		});

		return student;
	};
}
