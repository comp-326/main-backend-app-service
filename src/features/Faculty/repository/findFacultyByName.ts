
import { FacultyModelType } from '@exam-cell-features/Faculty/models';

export function findFacultyByName({ model }: { model: FacultyModelType }) {
	return async (name: string) => {
		const faculty = await model.findByName(name);

		return faculty;
	};
}