import { ICourse } from '../models/interfaces';
import courseModel from '../models';
import { courseRepositoryType } from './../repository';
import { createCourseEntity } from './../entities';
import departmentModel from '@exam-cell-features/Department/models';
import facultyModel from '@exam-cell-features/Faculty/models';

export function makeAddNewCourseUseCase({
	repository,
}: {
	repository: courseRepositoryType;
}) {
	return async (courseData: ICourse) => {
		const { getFaculty, getName, getCode, getDepartment } =
			createCourseEntity(courseData);
		const course = await repository.createNewCourse({
			courseModel: courseModel,
			facultyModel: facultyModel,
			departMentModel: departmentModel,
		})({
			faculty: getFaculty(),
			name: getName(),
			code: getCode(),
			department: getDepartment(),
		});

		return course;
	};
}
