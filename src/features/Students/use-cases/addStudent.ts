import { ExpressError } from '@exam-cell-common/errors/ExpressError';
import { IStudent } from './../models/interfaces';
import { StudentRepositoryType } from '../repository';
import createStudentEntity from '../entities';
import moment from 'moment';
import studentModel from '@exam-cell-features/Students/models';
import { subscribeToNewAccountMailer } from '@exam-cell-services/resources/mail/subscribeToMailer';

export function makeAddNewStudentUseCase({
	repository,
}: {
	repository: StudentRepositoryType;
}) {
	return async (studentData: IStudent) => {
		const {
			getCourse,
			getDepartment,
			getEmail,
			getFirstName,
			getGender,
			getLastName,
			getPassword,
			getRole,
		} = await createStudentEntity(studentData);
		const existing = await repository.findStudentByEmail({model:studentModel})(getEmail());
		if (existing) {
			throw new ExpressError({
				message: 'Email already registered',
				status: 'warning',
				statusCode: 400,
				data: {},
			});
		}
		const saved = await repository.createNewStudent({
			model: studentModel,
		})({
			email: getEmail(),
			firstName: getFirstName(),
			lastName: getLastName(),
			gender: getGender(),
			password: getPassword(),
			role: getRole(),
			course: getCourse(),
			department: getDepartment(),
		});

		subscribeToNewAccountMailer({
			email: getEmail(),
			firstName: getFirstName(),
			lastName: getLastName(),
			password: studentData.password,
			subject: 'New Student account',
			time: moment().format('LLLL'),
		});

		return saved;
	};
}
