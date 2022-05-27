import { AdminModelType } from '../models';
import { IAdmin } from './../models/interfaces';

export function createNewAdmin({ model }: { model: AdminModelType }) {
	return async (adminData: IAdmin) => {
		const admin = await model.create(adminData);

		return admin;
	};
}