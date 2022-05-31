import { AdminRepositoryType } from '../repository';
import { ExpressError } from '@exam-cell-common/errors/ExpressError';
import adminModel from '@exam-cell-features/Admin/models';
import { validateEmail } from '@exam-cell-utils/mails/validator';

export function makeListAdminByEmailUseCase({
	repository,
}: {
	repository: AdminRepositoryType;
}) {
	return async (email: string) => {
		if (!validateEmail(email)) {
			throw new ExpressError({
				message: 'Email is invalid',
				status: 'warning',
				statusCode: 400,
				data: {},
			});
		}
		const admin = await repository.findAdminByEmail({
			model: adminModel,
		})(email);
		if (!admin) {
			throw new ExpressError({
				message: 'Admin not found',
				status: 'warning',
				statusCode: 404,
				data: {},
			});
		}

		return admin;
	};
}
