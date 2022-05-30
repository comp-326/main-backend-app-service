import { courseModelType } from '../models';

type Props = {
	courseModel: courseModelType;
};

export function findCourseByDepartment({ courseModel }: Props) {
	return async (departmentId: string) => {
		const courses = await courseModel.find({ department: departmentId });

		return courses;
	};
}
