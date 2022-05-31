import { StudentModelType } from '../models';

export function findStudentById({ model }: { model: StudentModelType }) {
	return async (studentId: string) => {
		const student = await model.findById(studentId);

		return student;
	};
}
