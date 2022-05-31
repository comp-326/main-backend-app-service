import { StudentModelType } from '../models';

export function findStudentByEmail({ model }: { model: StudentModelType }) {
	return async (email: string) => {
		const student = await model.findOne({ email });

		return student;
	};
}
