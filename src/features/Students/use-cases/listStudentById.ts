import { ExpressError } from '@exam-cell-common/errors/ExpressError';
import { StudentRepositoryType } from '../repository';
import studentModel from '@exam-cell-features/Students/models';
import validateMongodbId from '@exam-cell-utils/mongo/ObjectId-validator';

export function makeListStudentByIdUseCase({
	repository,
}: {
	repository: StudentRepositoryType;
}) {
	return async (studentId: string) => {
		if (!studentId) {
			throw new ExpressError({
				message: 'Student ID is required',
				status: 'warning',
				statusCode: 400,
				data: {},
			});
		}
		if (!validateMongodbId(studentId)) {
			throw new ExpressError({
				message: 'Student ID is invalid',
				status: 'warning',
				statusCode: 400,
				data: {},
			});
		}
		const response = await repository.findStudentById({
			model: studentModel,
		})(studentId);
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
