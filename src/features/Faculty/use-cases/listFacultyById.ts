import { ExpressError } from '@exam-cell-common/errors/ExpressError';
import { FacultyRepositoryType } from '../repository';
import facultyModel from '../models';
import validateMongodbId from '@exam-cell-utils/mongo/ObjectId-validator';

type Props = {
	repository: FacultyRepositoryType;
};

export function makeListFacultyByIdUseCase({ repository }: Props) {
	return async ( facultyId: string ) => {
		if (!facultyId) {
			throw new ExpressError({
				message: 'Faculty id required',
				status: 'warning',
				data: {},
				statusCode: 404,
			});
		}
		if (!validateMongodbId(facultyId)) {
			throw new ExpressError({
				message: 'Invalid faculty id',
				status: 'warning',
				data: {},
				statusCode: 404,
			});
		}
		const facultyEntity = await repository.findFacultyById({
			model: facultyModel,
		})(facultyId);

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
