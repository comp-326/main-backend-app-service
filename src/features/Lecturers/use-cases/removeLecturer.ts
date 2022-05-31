import { ExpressError } from '@exam-cell-common/errors/ExpressError';
import { LecturerRepositoryType } from '../repository';
import lecturerModel from '@exam-cell-features/Lecturers/models';
import validateMongodbId from '@exam-cell-utils/mongo/ObjectId-validator';

export function makeRemoveLecturerByIdUseCase({
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
		const response = await repository.deleteLecturerById({
			model: lecturerModel,
		})(lecturerId);

		return response;
	};
}
