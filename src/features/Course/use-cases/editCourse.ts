import { ExpressError } from '@exam-cell-common/errors/ExpressError';
import { ICourse } from '../models/interfaces';
import courseModel from '../models';
import { courseRepositoryType } from './../repository';
import { createCourseEntity } from './../entities';
import validateMongodbId from '@exam-cell-utils/mongo/ObjectId-validator';

export function makeEditCourseUseCase({
	repository,
}: {
	repository: courseRepositoryType;
}) {
	return async (courseId: string, courseData: ICourse) => {
		if (!courseId) {
			throw new ExpressError({
				message: 'Course id required',
				status: 'warning',
				statusCode: 400,
				data: {},
			});
		}
		if (!validateMongodbId(courseId)) {
			throw new ExpressError({
				message: 'Invalid course id required',
				status: 'warning',
				statusCode: 400,
				data: {},
			});
		}
		const existingCourse = await repository.findCourseById({
			courseModel: courseModel,
		})(courseId);
		if (!existingCourse) {
			throw new ExpressError({
				message: 'Course not found',
				status: 'warning',
				statusCode: 404,
				data: {},
			});
		}
		const { getFaculty, getName, getCode, getDepartment } =
			createCourseEntity({ ...existingCourse, ...courseData });
		const course = await repository.updateCourseById({
			courseModel: courseModel,
		})(courseId, {
			faculty: getFaculty(),
			name: getName(),
			code: getCode(),
			department: getDepartment(),
		});

		return course;
	};
}
