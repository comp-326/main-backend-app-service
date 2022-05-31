import { ExpressError } from '@exam-cell-common/errors/ExpressError';
import { StudentRepositoryType } from '../repository';
import studentModel from '@exam-cell-features/Students/models';
import { validateEmail } from '@exam-cell-utils/mails/validator';

export function makeListStudentByEmailUseCase({
	repository,
}: {
	repository: StudentRepositoryType;
}) {
	return async (email: string) => {
		if (!email) {
			throw new ExpressError({
				message: 'Email is required',
				status: 'warning',
				statusCode: 400,
				data: {},
			});
		}
		if (!validateEmail(email)) {
			throw new ExpressError({
				message: 'Email is invalid',
				status: 'warning',
				statusCode: 400,
				data: {},
			});
		}

		const response = await repository.findStudentByEmail({
			model: studentModel,
		})(email);
		if (!response) {
			throw new ExpressError({
				message: 'Student not found',
				status: 'warning',
				statusCode: 404,
				data: {},
			});
		}

		return response;
	};
}
