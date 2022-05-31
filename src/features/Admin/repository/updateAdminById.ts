import { AdminModelType } from '../models';
import { IAdmin } from './../models/interfaces';

export function updateAdminById({ model }: { model: AdminModelType }) {
	return async (adminId: string, adminData: IAdmin) => {
		const admin = await model.findByIdAndUpdate(
			adminId,
			adminData,
			{ new: true },
		);

		return admin;
	};
}
