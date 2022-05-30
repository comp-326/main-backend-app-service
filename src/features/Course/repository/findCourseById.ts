import { courseModelType } from '../models';

type Props = {
	courseModel: courseModelType;
};

export function findCourseById({ courseModel }: Props) {
	return async (courseId: string) => {
		const course = await courseModel.findById(courseId);

		return course;
	};
}
