
import { FacultyModelType } from '@exam-cell-features/Faculty/models';
import { IFaculty } from '@exam-cell-features/Faculty/models/interfaces';

export function createNewFaculty({ model }: { model: FacultyModelType }) {
	return async (facultyData: IFaculty) => {
		const faculty = await model.create(facultyData);

		return faculty;
	};
}