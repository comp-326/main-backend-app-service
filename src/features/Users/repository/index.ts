/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { IUser } from '@exam-cell-features/Users/models/interfaces';
import { IUserRepository } from '@exam-cell-features/Users/interfaces';
import UserModel from '@exam-cell-features/Users/models';
import UserRoleModel from '@exam-cell-features/userRoles/models';

class UserRepository implements IUserRepository {

	softDeleteUser = async (id: string) => {
		const user = await UserModel.findByIdAndUpdate(id, { isDeleted: true }, { new: true });

		return user;
	};

	createUser = async (userData: IUser) => {
		const role = await UserRoleModel.getDefaultRole();
		const newUser = await UserModel.create({
			...userData,
			role,
		});


		return newUser;
	};

	findByEmail = async (email: string) => {

		const user = await UserModel.findByEmail(email);

		return user;
	};

	findById = async (id: string) => {

		const user = await UserModel.findById(id).select('+password');

		return user;
	};

	find = async (limit: number, page: number) => {
		const users = await UserModel.find({})
			.populate('role', 'name -_id ')
			.limit(limit)
			.skip(limit * (page - 1));

		return users;
	};

	updateById = async (id: string, data: IUser) => {
		const updated = await UserModel.findByIdAndUpdate(
			id,
			{ ...data },
			{ new: true }
		).select('+password');

		return updated;
	};

	deleteById = async (id: string) => {
		const deleted = await UserModel.findByIdAndDelete(id);

		return deleted;
	};
}

export default new UserRepository();