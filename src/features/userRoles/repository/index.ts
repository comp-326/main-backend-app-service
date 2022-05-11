import { IUserRoleRepository } from './../interfaces';
import UserRoleModel from './../models';

class UserRoleRepository implements IUserRoleRepository{
	findByName = async (name: string) => {
		const role = await UserRoleModel.findOne({ name });
		if (role) return role;

		return null;
	};

	createRoles = async () => {
		const roles = await UserRoleModel.InsertRoles();

		return roles;
	};

	findRoles = async () => {
		const roles = await UserRoleModel.find({});

		return roles;
	};

}

export default new UserRoleRepository();