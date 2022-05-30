import { FacultyModelType } from '@exam-cell-features/Faculty/models';
import { IFaculty } from '@exam-cell-features/Faculty/models/interfaces';

export function updateFacultyById({ model }: { model: FacultyModelType }) {
	return async (facultyId: string, facultyData: IFaculty) => {
		const faculty = await model.findByIdAndUpdate(facultyId, facultyData, {
			new: true,
		});

		return faculty;
	};
}
