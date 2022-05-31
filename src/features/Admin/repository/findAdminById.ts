import { AdminModelType } from '../models';

export function findAdminById({ model }: { model: AdminModelType }) {
	return async (adminId: string) => {
		const admin = await model.findById(adminId);

		return admin;
	};
}
