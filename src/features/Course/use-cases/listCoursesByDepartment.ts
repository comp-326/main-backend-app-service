import { ExpressError } from '@exam-cell-common/errors/ExpressError';
import courseModel from '../models';
import { courseRepositoryType } from './../repository';
import validateMongodbId from '@exam-cell-utils/mongo/ObjectId-validator';

export function makeListCourseByDepartmentUseCase({
	repository,
}: {
	repository: courseRepositoryType;
}) {
	return async (departmentId: string) => {
		if (!departmentId) {
			throw new ExpressError({
				message: 'Department Id is required',
				status: 'warning',
				data: {},
				statusCode: 400,
			});
		}
		if (!validateMongodbId(departmentId)) {
			throw new ExpressError({
				message: 'Invalid Department Id',
				status: 'warning',
				data: {},
				statusCode: 400,
			});
		}
		const course = await repository.findCourseByDepartment({
			courseModel: courseModel,
		})(departmentId);
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
