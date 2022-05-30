import { ExpressError } from '@exam-cell-common/errors/ExpressError';
import { FacultyRepositoryType } from '../repository';
import { IFaculty } from './../models/interfaces';
import { createFacultyEntity } from '../entities';
import facultyModel from '../models';
import validateMongodbId from '@exam-cell-utils/mongo/ObjectId-validator';

type Props = {
	repository: FacultyRepositoryType;
};

export function makeEditFacultyUseCase({ repository }: Props) {
	return async (facultyId: string, faculty: IFaculty) => {
		if (!facultyId) {
			throw new ExpressError({
				message: 'Faculty id required',
				status: 'warning',
				data: {},
				statusCode: 400,
			});
		}
		if (!validateMongodbId(facultyId)) {
			throw new ExpressError({
				message: 'Invalid faculty id',
				status: 'warning',
				data: {},
				statusCode: 400,
			});
		}
		const existingFaculty = await repository.findFacultyById({
			model: facultyModel,
		})(facultyId);
		if (!existingFaculty) {
			throw new ExpressError({
				message: 'Faculty not found',
				status: 'warning',
				data: {},
				statusCode: 404,
			});
		}
		const { getName } = createFacultyEntity(faculty);
		const facultyEntity = await repository.updateFacultyById({
			model: facultyModel,
		})(facultyId, { name: getName() });

		return facultyEntity;
	};
}
