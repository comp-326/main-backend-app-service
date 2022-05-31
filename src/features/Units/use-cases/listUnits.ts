import { ExpressError } from '@exam-cell-common/errors/ExpressError';
import unitModel from '../models';
import { unitRepositoryType } from './../repository/index';

export function makeListUnitUseCase({
	repository,
}: {
	repository: unitRepositoryType;
}) {
	return async () => {
		const units = await repository.findUnits({
			unitModel: unitModel,
		})();
		if (units.length === 0) {
			throw new ExpressError({
				message: 'No units found',
				status: 'warning',
				statusCode: 404,
				data: {},
			});
		}

		return units;
	};
}
