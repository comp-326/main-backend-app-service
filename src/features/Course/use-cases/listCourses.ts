import { ExpressError } from '@exam-cell-common/errors/ExpressError';
import courseModel from '../models';
import { courseRepositoryType } from './../repository';

export function makeListCoursesUseCase({
	repository,
}: {
	repository: courseRepositoryType;
}) {
	return async () => {
		const course = await repository.findAllCourses({
			courseModel: courseModel,
		})();
		if (course.length === 0) {
			throw new ExpressError({
				message: 'Courses not found',
				status: 'warning',
				statusCode: 404,
				data: {},
			});
		}

		return course;
	};
}
