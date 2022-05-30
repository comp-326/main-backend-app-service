import { ExpressError } from '@exam-cell-common/errors/ExpressError';
import { FacultyRepositoryType } from '../repository';
import facultyModel from '../models';

type Props = {
	repository: FacultyRepositoryType;
};

export function makeListFacultyByNameUseCase({ repository }: Props) {
	return async (facultyName: string ) => {
		if (!facultyName) {
			throw new ExpressError({
				message: 'Faculty name required',
				status: 'warning',
				data: {},
				statusCode: 404,
			});
		}
		const facultyEntity = await repository.findFacultyByName({
			model: facultyModel,
		})(facultyName);

		if (!facultyEntity) {
			throw new ExpressError({
				message: 'Faculty not found',
				status: 'warning',
				data: {},
				statusCode: 404,
			});
		}

		return facultyEntity;
	};
}
