import { IUser } from '@exam-cell-features/Users/models/interfaces';
import { UserModelType } from '@exam-cell-features/Users/models';

export function createNewAdmin({ model }: { model: UserModelType }) {
	return async (adminData: IUser) => {
		const admin = await model.create(adminData);

		return admin;
	};
}