import { ILecturer } from '@exam-cell-features/Lecturers/models/interfaces';
import { LecturerRepositoryType } from '../repository';
import createLecturerEntity from '../entities';
import lecturerModel from '@exam-cell-features/Lecturers/models';

export function makeListLecturerById({
	repository,
}: {
	repository: LecturerRepositoryType;
}) {
	return async (lecturerData: ILecturer) => {
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
