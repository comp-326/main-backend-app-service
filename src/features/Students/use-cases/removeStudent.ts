import { ExpressError } from '@exam-cell-common/errors/ExpressError';
import { StudentRepositoryType } from '../repository';
import studentModel from '@exam-cell-features/Students/models';
import validateMongodbId from '@exam-cell-utils/mongo/ObjectId-validator';

export function makeRemoveStudentByIdUseCase({
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
		const response = await repository.deleteStudent({
			model: studentModel,
		})(studentId);

		return response;
	};
}
