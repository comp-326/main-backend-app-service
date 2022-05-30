import { ExpressError } from '@exam-cell-common/errors/ExpressError';
import { ILecturer } from '@exam-cell-features/Lecturers/models/interfaces';
import { LecturerRepositoryType } from '../repository';
import createLecturerEntity from '../entities';
import lecturerModel from '@exam-cell-features/Lecturers/models';
import validateMongodbId from '@exam-cell-utils/mongo/ObjectId-validator';

export function makeEditLecturerUseCase({
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
		if (!validateMongodbId(lecturerId)) {
			throw new ExpressError({
				message: 'Lecturer id is invalid',
				status: 'warning',
				statusCode: 400,
				data: {},
			});
		}
		const existingLecturer = await repository.findLecturerById({
			model: lecturerModel,
		})(lecturerId);
		if (!existingLecturer) {
			throw new ExpressError({
				message: 'Lecturer not found',
				status: 'warning',
				statusCode: 404,
				data: {},
			});
		}

		const {
			getEmail,
			getFirstName,
			getGender,
			getLastName,
			getPassword,
			getRole,
		} = await createLecturerEntity({
			...existingLecturer._doc,
			...lecturerData,
		});
		const saved = await repository.updateLecturerById({
			model: lecturerModel,
		})(lecturerId, {
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
