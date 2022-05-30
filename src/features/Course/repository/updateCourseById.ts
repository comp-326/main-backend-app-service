import { ICourse } from './../models/interfaces';
import { courseModelType } from '../models';

type Props = {
	courseModel: courseModelType;
};

export function updateCourseById({ courseModel }: Props) {
	return async (courseId: string, courseData: ICourse) => {
		const course = await courseModel.findByIdAndUpdate(
			courseId,
			courseData,
			{ new: true },
		);

		return course;
	};
}
