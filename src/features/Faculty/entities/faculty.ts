import { ExpressError } from '@exam-cell-common/errors/ExpressError';
import { IFaculty } from './../models/interfaces';

export  function makeCreateFacultyEntity() {
	return ({
		name
	}: IFaculty) => {
		if (!name) {
			throw new ExpressError({
				message: 'Faculty name is required',
				status: 'warning',
				statusCode: 400,
				data: {}
			});
		}

		return Object.freeze({
			getName: () => name,
		});
	};
}
