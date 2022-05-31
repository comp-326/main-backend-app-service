import { AdminRepositoryType } from '../repository';
import { ExpressError } from '@exam-cell-common/errors/ExpressError';
import { IAdmin } from '@exam-cell-features/Admin/models/interfaces';
import adminModel from '@exam-cell-features/Admin/models';
import createAdminEntity from '../entities';
import validateMongodbId from '@exam-cell-utils/mongo/ObjectId-validator';

export function makeEditAdminUseCase({
	repository,
}: {
	repository: AdminRepositoryType;
}) {
	return async (adminId: string, adminData: IAdmin) => {
		if (!adminId) {
			throw new ExpressError({
				message: 'Admin id is required',
				status: 'warning',
				statusCode: 400,
				data: {},
			});
		}
		if (!validateMongodbId(adminId)) {
			throw new ExpressError({
				message: 'Admin id is invalid',
				status: 'warning',
				statusCode: 400,
				data: {},
			});
		}
		const existingAdmin = await repository.findAdminById({
			model: adminModel,
		})(adminId);
		if (!existingAdmin) {
			throw new ExpressError({
				message: 'Admin not found',
				status: 'warning',
				statusCode: 404,
				data: {},
			});
		}

		const {
			getEmail,
			getPassword,
			getRole,
		} = await createAdminEntity({
			...existingAdmin._doc,
			...adminData,
		});
		const saved = await repository.updateAdminById({
			model: adminModel,
		})(adminId, {
			email: getEmail(),
			password: getPassword(),
			role: getRole(),
		});

		return saved;
	};
}
