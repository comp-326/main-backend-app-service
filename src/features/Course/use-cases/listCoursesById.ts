import { ExpressError } from '@exam-cell-common/errors/ExpressError';
import courseModel from '../models';
import { courseRepositoryType } from './../repository';
import validateMongodbId from '@exam-cell-utils/mongo/ObjectId-validator';

export function makeListCourseByIdUseCase({
	repository,
}: {
	repository: courseRepositoryType;
}) {
	return async (courseId: string) => {
		if (!courseId) {
			throw new ExpressError({
				message: 'Course id is required',
				statusCode: 400,
				data: {},
				status: 'warning',
			});
		}
		if (!validateMongodbId(courseId)) {
			throw new ExpressError({
				message: 'Invalid course id',
				statusCode: 400,
				data: {},
				status: 'warning',
			});
		}
		const course = await repository.findCourseById({
			courseModel: courseModel,
		})(courseId);

		return course;
	};
}
