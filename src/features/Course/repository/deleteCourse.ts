import { courseModelType } from '../models';

type Props = {
	courseModel: courseModelType;
};

export function deleteCourseById({ courseModel }: Props) {
	return async (courseId: string) => {
		const course = await courseModel.findByIdAndDelete(courseId);

		return course;
	};
}
