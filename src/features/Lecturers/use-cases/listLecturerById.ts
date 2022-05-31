import { ExpressError } from '@exam-cell-common/errors/ExpressError';
import { LecturerRepositoryType } from '../repository';
import lecturerModel from '@exam-cell-features/Lecturers/models';
import validateMongodbId from '@exam-cell-utils/mongo/ObjectId-validator';

export function makeListLecturerByIdUseCase({
	repository,
}: {
	repository: LecturerRepositoryType;
}) {
	return async (lecturerId: string) => {
		if (!lecturerId) {
			throw new ExpressError({
				message: 'Lecturer id is required',
				status: 'warning',
				statusCode: 400,
				data: {},
			});
		}
		if (!validateMongodbId(lecturerId)) {
			throw new ExpressError({
				message: 'Lecturer id is invalid',
				status: 'warning',
				statusCode: 400,
				data: {},
			});
		}

		const response = await repository.findLecturerById({
			model: lecturerModel,
		})(lecturerId);
		if (!response) {
			throw new ExpressError({
				message: 'Lecturer not found',
				status: 'warning',
				statusCode: 404,
				data: {},
			});
		}

		return response;
	};
}
