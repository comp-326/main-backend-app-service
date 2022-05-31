import { courseModelType } from '../models';

type Props = {
	courseModel: courseModelType;
};

export function findCourseByName({ courseModel }: Props) {
	return async (name: string) => {
		const course = await courseModel
			.findOne({ name })
			.populate('department')
			.populate('faculty');

		return course;
	};
}
