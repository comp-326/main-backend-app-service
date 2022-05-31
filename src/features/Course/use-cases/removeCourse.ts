import courseModel from '../models';
import { courseRepositoryType } from './../repository';

export function makeRemoveCourseUseCase({
	repository,
}: {
	repository: courseRepositoryType;
}) {
	return async (courseId: string) => {
		const course = await repository.deleteCourseById({
			courseModel: courseModel,
		})(courseId);

		return course;
	};
}
