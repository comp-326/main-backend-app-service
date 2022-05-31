import { courseModelType } from '../models';

type Props = {
	courseModel: courseModelType;
};

export function findAllCourses({ courseModel }: Props) {
	return async () => {
		const course = await courseModel
			.find({})
			.populate('faculty')
			.populate('department');

		return course;
	};
}
