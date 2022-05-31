import { ExpressError } from '@exam-cell-common/errors/ExpressError';
import { IUnit } from '../models/interfaces';
import { createUnitEntity } from '../entities';
import unitModel from '../models';
import { unitRepositoryType } from './../repository/index';
import validateMongodbId from '@exam-cell-utils/mongo/ObjectId-validator';

export function makeEditUnitByIdUseCase({
	repository,
}: {
	repository: unitRepositoryType;
}) {
	return async (unitId: string, unitData: IUnit) => {
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
		const existingUnit = await repository.findUnitById({
			unitModel: unitModel,
		})(unitId);
		if (!existingUnit) {
			throw new ExpressError({
				message: 'Unit not found',
				status: 'warning',
				statusCode: 404,
				data: {},
			});
		}
		const {
			getDepartment,
			getFaculty,
			getName,
			getSemester,
			getUnitCode,
			getYear,
		} = createUnitEntity({ ...existingUnit._doc, ...unitData });
		const unit = await repository.updateUnitById({
			unitModel: unitModel,
		})(unitId, {
			department: getDepartment(),
			faculty: getFaculty(),
			name: getName(),
			semester: getSemester(),
			unitCode: getUnitCode(),
			year: getYear(),
		});

		return unit;
	};
}
