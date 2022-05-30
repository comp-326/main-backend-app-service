import courseModel from '../models';
import { courseRepositoryType } from './../repository';

export function makeListCourseByIdUseCase({
	repository,
}: {
	repository: courseRepositoryType;
}) {
	return async (courseId: string) => {
		const course = await repository.findCourseById({
			courseModel: courseModel,
		})(courseId);

		return course;
	};
}
