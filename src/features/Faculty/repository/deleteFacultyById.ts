
import { FacultyModelType } from '@exam-cell-features/Faculty/models';

export function deleteFacultyById({ model }: { model: FacultyModelType }) {
	return async (facultyId: string) => {
		const faculty = await model.findByIdAndDelete(facultyId);

		return faculty;
	};
}