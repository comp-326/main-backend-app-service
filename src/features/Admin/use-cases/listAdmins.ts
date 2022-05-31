import { AdminRepositoryType } from '../repository';
import { ExpressError } from '@exam-cell-common/errors/ExpressError';
import adminModel from '@exam-cell-features/Admin/models';

export function makeListAdminsUseCase({
	repository,
}: {
	repository: AdminRepositoryType;
}) {
	return async () => {
		const response = await repository.findAllAdmins({
			model: adminModel,
		})();
		if (response.length === 0) {
			throw new ExpressError({
				message: 'Admins not found',
				status: 'warning',
				statusCode: 404,
				data: {},
			});
		}

		return response;
	};
}
