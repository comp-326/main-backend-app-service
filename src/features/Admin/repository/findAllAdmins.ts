import { AdminModelType } from '@exam-cell-features/Admin/models';

export function findAllAdmins({ model }: { model: AdminModelType }) {
	return async () => {
		const admins = await model.find({});

		return admins;
	};
}
