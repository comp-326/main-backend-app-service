import { AdminModelType } from '@exam-cell-features/Admin/models';

type Props = {
	limit: number;
	page: number;
};

export function findAllAdmins({ model }: { model: AdminModelType }) {
	return async ({ limit, page }: Props) => {
		const admins = await model
			.find({ role: { name: 'admin' } })
			.limit(limit)
			.skip(limit * (page - 1))
			.populate('role');

		return admins;
	};
}
