import { ExpressError } from '@exam-cell-common/errors/ExpressError';
import { ILecturer } from '@exam-cell-features/Lecturers/models/interfaces';
import { LecturerRepositoryType } from '../repository';
import createLecturerEntity from '../entities';
import lecturerModel from '@exam-cell-features/Lecturers/models';
import moment from 'moment';
import { subscribeToNewAccountMailer } from '@exam-cell-services/resources/mail/subscribeToMailer';

export function makeAddNewLecturerUseCase({
	repository,
}: {
	repository: LecturerRepositoryType;
}) {
	return async (lecturerData: ILecturer) => {
		// const existingLecturer =
		const {
			getEmail,
			getFirstName,
			getGender,
			getLastName,
			getPassword,
			getRole,
		} = await createLecturerEntity(lecturerData);
		const existing = await repository.findLecturerByEmail({
			model: lecturerModel,
		})(getEmail());
		if (existing) {
			throw new ExpressError({
				message: 'Email already registered',
				status: 'warning',
				statusCode: 400,
				data: {},
			});
		}
		const saved = await repository.createNewLecturer({
			model: lecturerModel,
		})({
			email: getEmail(),
			firstName: getFirstName(),
			lastName: getLastName(),
			gender: getGender(),
			password: getPassword(),
			role: getRole(),
		});

		subscribeToNewAccountMailer({
			email: getEmail(),
			firstName: getFirstName(),
			lastName: getLastName(),
			password: lecturerData.password,
			subject: 'New lecturer account',
			time: moment().format('LLLL'),
		});

		return saved;
	};
}
