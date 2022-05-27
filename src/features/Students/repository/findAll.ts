import { StudentModelType } from '@exam-cell-features/Students/models';

type Props = {
	limit: number;
	page: number;
};

export function findAllStudents({ model }: { model: StudentModelType }) {
	return async ({ limit, page }: Props) => {
		const admins = await model
			.find({ role: { name: 'students' } })
			.limit(limit)
			.skip(limit * (page - 1))
			.populate('role');

		return admins;
	};
}
