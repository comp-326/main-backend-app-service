import { ExpressError } from '@exam-cell-common/errors/ExpressError';
import { ILecturer } from '@exam-cell-features/Lecturers/models/interfaces';
import { LecturerRepositoryType } from '../repository';
import createLecturerEntity from '../entities';
import lecturerModel from '@exam-cell-features/Lecturers/models';

export function makeAddNewLecturerUseCase({
	repository,
}: {
	repository: LecturerRepositoryType;
}) {
	return async (lecturerId: string, lecturerData: ILecturer) => {
		if (!lecturerId) {
			throw new ExpressError({
				message: 'Lecturer id is required',
				status: 'warning',
				statusCode: 400,
				data: {},
			});
		}
		const existingLecturer = await repository.getLecturerById(lecturerId);
		const {
			getEmail,
			getFirstName,
			getGender,
			getLastName,
			getPassword,
			getRole,
		} = await createLecturerEntity(lecturerData);
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

		return saved;
	};
}
