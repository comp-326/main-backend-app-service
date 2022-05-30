import { ExpressError } from '@exam-cell-common/errors/ExpressError';
import courseModel from '../models';
import { courseRepositoryType } from './../repository';

export function makeListCourseByNameUseCase({
	repository,
}: {
	repository: courseRepositoryType;
}) {
	return async (name: string) => {
		const course = await repository.findCourseByName({
			courseModel: courseModel,
		})(name);
		if (!course) {
			throw new ExpressError({
				message: 'Course not found',
				status: 'warning',
				statusCode: 404,
				data: {},
			});
		}

		return course;
	};
}
