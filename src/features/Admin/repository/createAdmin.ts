import { AdminModelType } from '../models';
import { IAdmin } from './../models/interfaces';
import userRoleModel from '@exam-cell-features/userRoles/models';

export function createNewAdmin({ model }: { model: AdminModelType }) {
	return async (adminData: IAdmin) => {
		const roles = await userRoleModel.find();
		if (roles.length < 1) await userRoleModel.InsertRoles();

		const admin = await model.create({
			...adminData,
			role: await userRoleModel.findOne({ name: 'administrator' }),
		});

		return admin;
	};
}
