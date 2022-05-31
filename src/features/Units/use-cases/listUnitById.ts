import { ExpressError } from '@exam-cell-common/errors/ExpressError';
import unitModel from '../models';
import { unitRepositoryType } from './../repository/index';
import validateMongodbId from '@exam-cell-utils/mongo/ObjectId-validator';

export function makeListUnitByIdUseCase({
	repository,
}: {
	repository: unitRepositoryType;
}) {
	return async (unitId: string) => {
		if (!unitId) {
			throw new ExpressError({
				message: 'Unit Id is required',
				status: 'warning',
				statusCode: 400,
				data: {},
			});
		}
		if (!validateMongodbId(unitId)) {
			throw new ExpressError({
				message: 'Invalid Unit Id',
				status: 'warning',
				statusCode: 400,
				data: {},
			});
		}
		const unit = await repository.findUnitById({
			unitModel: unitModel,
		})(unitId);
		if (!unit) {
			throw new ExpressError({
				message: 'Unit not found',
				status: 'warning',
				statusCode: 400,
				data: {},
			});
		}

		return unit;
	};
}
