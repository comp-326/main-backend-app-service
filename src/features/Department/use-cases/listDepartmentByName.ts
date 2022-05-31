import { DepartmentRepositoryType } from '../repository';
import { ExpressError } from '@exam-cell-common/errors/ExpressError';
import departmentModel from '@exam-cell-features/Department/models';
import { validateEmail } from '@exam-cell-utils/mails/validator';

export function makeListDepartmentByNameUseCase({
	repository,
}: {
	repository: DepartmentRepositoryType;
}) {
	return async (email: string) => {
		if (!email) {
			throw new ExpressError({
				message: 'Email is required',
				status: 'warning',
				statusCode: 400,
				data: {},
			});
		}
		if (!validateEmail(email)) {
			throw new ExpressError({
				message: 'Email is invalid',
				status: 'warning',
				statusCode: 400,
				data: {},
			});
		}

		const response = await repository.findDepartmentByName({
			model: departmentModel,
		})(email);
		if (!response) {
			throw new ExpressError({
				message: 'Department not found',
				status: 'warning',
				statusCode: 404,
				data: {},
			});
		}

		return response;
	};
}
