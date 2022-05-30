import { ExpressError } from '@exam-cell-common/errors/ExpressError';
import { LecturerRepositoryType } from '../repository';
import lecturerModel from '@exam-cell-features/Lecturers/models';

export function makeListLecturersUseCase({
	repository,
}: {
	repository: LecturerRepositoryType;
}) {
	return async () => {
		const response = await repository.findAllLecturers({
			model: lecturerModel,
		})();
		if (response.length === 0) {
			throw new ExpressError({
				message: 'Lecturers not found',
				status: 'warning',
				statusCode: 404,
				data: {},
			});
		}

		return response;
	};
}
