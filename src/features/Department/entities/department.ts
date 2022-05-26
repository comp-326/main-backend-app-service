import { ExpressError } from '@exam-cell-common/errors/ExpressError';
import { IDepartment } from '../models/interfaces';
import validateMongodbId from '@exam-cell-utils/mongo/ObjectId-validator';

export function makeCreateDepartmentEntity() {
	return ({ faculty, name }: IDepartment) => {
		if (!name) {
			throw new ExpressError({
				message: 'Department name is required',
				status: 'warning',
				data: {},
				statusCode: 400,
			});
		}
		if (!faculty) {
			throw new ExpressError({
				message: 'Department faculty is required',
				status: 'warning',
				data: {},
				statusCode: 400,
			});
		}
		if (!validateMongodbId(faculty)) {
			throw new ExpressError({
				message: 'Department faculty is invalid',
				status: 'warning',
				data: {},
				statusCode: 400,
			});
		}

		return Object.freeze({
			getName:()=>name,
			getFaculty:()=>faculty,
		});
	};
}
