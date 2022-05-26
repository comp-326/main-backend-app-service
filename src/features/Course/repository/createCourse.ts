import { ExpressError } from '@exam-cell-common/errors/ExpressError';
import { FacultyModelType } from '@exam-cell-features/Faculty/models';
import { ICourse } from './../models/interfaces';
import { courseModelType } from '../models';
import { departmentModelType } from '@exam-cell-features/Department/models';

type Props = {
  courseModel: courseModelType;
  facultyModel: FacultyModelType;
  departMentModel: departmentModelType;
};

export function createNewCourse({ courseModel, facultyModel,departMentModel }: Props) {
	return async (adminData: ICourse) => {
		const faculty = await facultyModel.findById(adminData.faculty);
		const department = await departMentModel.findById(adminData.department);
		if (!faculty) {
			throw new ExpressError({
				message: 'Course faculty is invalid',
				status: 'warning',
				data: {},
				statusCode: 400,
			});
		}
		if (!department) {
			throw new ExpressError({
				message: 'Course department is invalid',
				status: 'warning',
				data: {},
				statusCode: 400,
			});
		}

		const course = await courseModel.create({
			...adminData,
			faculty: faculty._id,
		});

		return course;
	};
}
