import { AdminModelType } from '../models';

export function findAdminByEmail({ model }: { model: AdminModelType }) {
	return async (email: string) => {
		const admin = await model.findOne({ email });

		return admin;
	};
}
