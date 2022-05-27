import { IStudent } from './../models/interfaces';
import { StudentRepositoryType } from '../repository';
import createAdminEntity from '../entities';
import userModel from '@exam-cell-features/Students/models';

export function makeAddNewStudentUseCase({
	repository,
}: {
	repository: StudentRepositoryType;
}) {
	return async (adminData: IStudent) => {
		const {
			getCourse,
			getDepartment,
			getEmail,
			getFirstName,
			getGender,
			getLastName,
			getPassword,
			getRole,
		} = await createAdminEntity(adminData);
		const saved = await repository.createNewStudent({
			model: userModel,
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

		return saved;
	};
}
