import { StudentModelType } from '@exam-cell-features/Students/models';

export function findAllStudents({ model }: { model: StudentModelType }) {
	return async () => {
		const students = await model.find({});

		return students;
	};
}
