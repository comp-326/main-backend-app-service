import { ExpressError } from '@exam-cell-common/errors/ExpressError';
import { ICourse } from '../models/interfaces';
import validateMongodbId from '@exam-cell-utils/mongo/ObjectId-validator';

export function makeCreateCourseEntity() {
	return ({ faculty, name,code,department }: ICourse) => {
		if (!name) {
			throw new ExpressError({
				message: 'Course name is required',
				status: 'warning',
				data: {},
				statusCode: 400,
			});
		}
		if (!code) {
			throw new ExpressError({
				message: 'Course code is required',
				status: 'warning',
				data: {},
				statusCode: 400,
			});
		}
		if (!faculty) {
			throw new ExpressError({
				message: 'Course faculty is required',
				status: 'warning',
				data: {},
				statusCode: 400,
			});
		}
		if (!department) {
			throw new ExpressError({
				message: 'Course department is required',
				status: 'warning',
				data: {},
				statusCode: 400,
			});
		}
		if (!validateMongodbId(faculty)) {
			throw new ExpressError({
				message: 'Course faculty is invalid',
				status: 'warning',
				data: {},
				statusCode: 400,
			});
		}
		if (!validateMongodbId(department)) {
			throw new ExpressError({
				message: 'Course department is invalid',
				status: 'warning',
				data: {},
				statusCode: 400,
			});
		}

		return Object.freeze({
			getName:()=>name,
			getFaculty:()=>faculty,
			getDepartment:()=>department,
			getCode:()=>code,
		});
	};
}
