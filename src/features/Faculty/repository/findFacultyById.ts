
import { FacultyModelType } from '@exam-cell-features/Faculty/models';

export function findFacultyById({ model }: { model: FacultyModelType }) {
	return async (facultyId: string) => {
		const faculty = await model.findById(facultyId);

		return faculty;
	};
}