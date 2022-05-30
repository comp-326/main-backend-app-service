import { ExpressError } from '@exam-cell-common/errors/ExpressError';
import { LecturerRepositoryType } from '../repository';
import lecturerModel from '@exam-cell-features/Lecturers/models';
import { validateEmail } from '@exam-cell-utils/mails/validator';

export function makeListLecturerByEmailUseCase({
	repository,
}: {
	repository: LecturerRepositoryType;
}) {
	return async (email: string) => {
		if (!validateEmail(email)) {
			throw new ExpressError({
				message: 'Email is invalid',
				status: 'warning',
				statusCode: 400,
				data: {},
			});
		}
		const lecturer = await repository.findLecturerByEmail({
			model: lecturerModel,
		})(email);
		if (!lecturer) {
			throw new ExpressError({
				message: 'Lecturer not found',
				status: 'warning',
				statusCode: 404,
				data: {},
			});
		}

		return lecturer;
	};
}
