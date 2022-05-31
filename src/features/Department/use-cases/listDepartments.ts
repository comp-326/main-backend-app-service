import { DepartmentRepositoryType } from '../repository';
import departmentModel from '@exam-cell-features/Department/models';

export function makeListDepartmentsUseCase({
	repository,
}: {
	repository: DepartmentRepositoryType;
}) {
	return async () => {
		const response = await repository.findAllDepartments({
			model: departmentModel,
		})();

		return response;
	};
}
