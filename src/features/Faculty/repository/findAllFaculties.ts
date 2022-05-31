import { FacultyModelType } from '@exam-cell-features/Faculty/models';

export function findAllFaculties({ model }: { model: FacultyModelType }) {
	return async () => {
		const faculties = await model.find();

		return faculties;
	};
}