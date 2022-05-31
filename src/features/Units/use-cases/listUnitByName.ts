import { ExpressError } from '@exam-cell-common/errors/ExpressError';
import unitModel from '../models';
import { unitRepositoryType } from './../repository/index';

export function makeListUnitByNameUseCase({
	repository,
}: {
	repository: unitRepositoryType;
}) {
	return async (unitName: string) => {
		const unit = await repository.findUnitByName({
			unitModel: unitModel,
		})(unitName);
		if (!unit) {
			throw new ExpressError({
				message: 'Unit not found',
				status: 'warning',
				statusCode: 404,
				data: {},
			});
		}

		return unit;
	};
}
