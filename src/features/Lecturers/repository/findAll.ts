import { LecturerModelType } from '@exam-cell-features/Lecturers/models';

type Props = {
	limit: number;
	page: number;
};

export function findAllLecturers({ model }: { model: LecturerModelType }) {
	return async ({ limit, page }: Props) => {
		const admins = await model
			.find({ role: { name: 'lecturer' } })
			.limit(limit)
			.skip(limit * (page - 1))
			.populate('role');

		return admins;
	};
}
