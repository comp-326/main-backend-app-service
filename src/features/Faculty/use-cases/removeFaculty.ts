import { ExpressError } from '@exam-cell-common/errors/ExpressError';
import { FacultyRepositoryType } from '../repository';
import facultyModel from '../models';
import validateMongodbId from '@exam-cell-utils/mongo/ObjectId-validator';

type Props = {
	repository: FacultyRepositoryType;
};

export function makeRemoveFacultyUseCase({ repository }: Props) {
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
		const facultyEntity = await repository.deleteFacultyById({
			model: facultyModel,
		})(facultyId);

		return facultyEntity;
	};
}
