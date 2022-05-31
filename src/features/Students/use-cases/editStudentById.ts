import { ExpressError } from '@exam-cell-common/errors/ExpressError';
import { IStudent } from '../models/interfaces';
import { StudentRepositoryType } from '../repository';
import createStudentEntity from '../entities';
import studentModel from '@exam-cell-features/Students/models';
import validateMongodbId from '@exam-cell-utils/mongo/ObjectId-validator';

export function makeEditStudentByIdUseCase({
	repository,
}: {
	repository: StudentRepositoryType;
}) {
	return async (studentId: string, studentData: IStudent) => {
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
		const existingStudent = await repository.findStudentById({
			model: studentModel,
		})(studentId);
		if (!existingStudent) {
			throw new ExpressError({
				message: 'Student not found',
				status: 'warning',
				statusCode: 404,
				data: {},
			});
		}
		const {
			getCourse,
			getDepartment,
			getEmail,
			getFirstName,
			getGender,
			getLastName,
			getPassword,
			getRole,
		} = await createStudentEntity({
			...existingStudent._doc,
			...studentData,
		});
		const response = await repository.updateStudentById({
			model: studentModel,
		})(studentId, {
			email: getEmail(),
			firstName: getFirstName(),
			lastName: getLastName(),
			gender: getGender(),
			password: getPassword(),
			role: getRole(),
			course: getCourse(),
			department: getDepartment(),
		});

		return response;
	};
}
