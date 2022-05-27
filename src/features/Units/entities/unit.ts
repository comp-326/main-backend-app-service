import { ExpressError } from '@exam-cell-common/errors/ExpressError';
import { IUnit } from '../models/interfaces';
import validateMongodbId from '@exam-cell-utils/mongo/ObjectId-validator';

export function makeCreateUnitEntity() {
	return ({ faculty, name,department,unitCode }: IUnit) => {
		if (!name) {
			throw new ExpressError({
				message: 'Unit name is required',
				status: 'warning',
				data: {},
				statusCode: 400,
			});
		}
		if (!unitCode) {
			throw new ExpressError({
				message: 'Unit code is required',
				status: 'warning',
				data: {},
				statusCode: 400,
			});
		}
		if (!faculty) {
			throw new ExpressError({
				message: 'Unit faculty is required',
				status: 'warning',
				data: {},
				statusCode: 400,
			});
		}
		if (!validateMongodbId(faculty)) {
			throw new ExpressError({
				message: 'Unit faculty is invalid',
				status: 'warning',
				data: {},
				statusCode: 400,
			});
		}
		if (!department) {
			throw new ExpressError({
				message: 'Unit department is required',
				status: 'warning',
				data: {},
				statusCode: 400,
			});
		}
		if (!validateMongodbId(department)) {
			throw new ExpressError({
				message: 'Unit department is invalid',
				status: 'warning',
				data: {},
				statusCode: 400,
			});
		}

		return Object.freeze({
			getName:()=>name,
			getFaculty:()=>faculty,
			getDepartment:()=>department,
			getUnitCode:()=>unitCode,
			
		});
	};
}
