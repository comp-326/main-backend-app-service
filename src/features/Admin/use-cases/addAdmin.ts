import { AdminRepositoryType } from '../repository';
import { IAdmin } from '@exam-cell-features/Admin/models/interfaces';
import adminModel from '@exam-cell-features/Admin/models';
import createAdminEntity from '../entities';

export function makeAddNewAdminUseCase({
	repository,
}: {
	repository: AdminRepositoryType;
}) {
	return async (adminData: IAdmin) => {
		const {
			getEmail,
			getPassword,
			getRole,
		} = await createAdminEntity(adminData);
		const saved = await repository.createNewAdmin({
			model: adminModel,
		})({
			email: getEmail(),
			password: getPassword(),
			role: getRole(),
		});

		return saved;
	};
}
