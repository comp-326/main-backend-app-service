import { StudentRepositoryType } from '../repository';
import studentModel from '@exam-cell-features/Students/models';

export function makeListStudentsUseCase({
	repository,
}: {
	repository: StudentRepositoryType;
}) {
	return async () => {
		const response = await repository.findAllStudents({
			model: studentModel,
		})();

		return response;
	};
}
