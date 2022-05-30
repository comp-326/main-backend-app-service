import { ExpressError } from '@exam-cell-common/errors/ExpressError';
import { FacultyRepositoryType } from '../repository';
import facultyModel from '../models';

type Props = {
	repository: FacultyRepositoryType;
};

export function makeListFacultiesUseCase({ repository }: Props) {
	return async () => {
		const faculties = await repository.findAllFaculties({
			model: facultyModel,
		})();
		if (faculties.length === 0) {
			throw new ExpressError({
				data: {},
				message: 'No faculties found',
				status: 'warning',
				statusCode: 404,
			});
		}

		return faculties;
	};
}
