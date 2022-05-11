/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { IUser } from '@backend-service-features/users/models/interfaces';
import { IUserRepository } from '@backend-service-features/users/interfaces';
import UserModel from '@backend-service-features/users/models';
import UserRoleModel from '@backend-service-features/userRoles/models';
import { generateGravatarUrl } from '@backend-service-common/gravatar';
import mediaModel from '@backend-service-features/media/models';

class UserRepository implements IUserRepository{

	softDeleteUser = async (id: string) => {
		const user = await UserModel.findByIdAndUpdate(id, { isDeleted: true }, { new: true });

		return user;
	};

	createUser = async (userData: IUser) => {
		const role = await UserRoleModel.getDefaultRole();
		if (role) {
			const profilePicture = await mediaModel.create({
				type: 'profile',
				url: generateGravatarUrl(userData.email),
				uploadId: userData.email,
				size: 200,
				mediaType: 'image'
			});


			const newUser = await UserModel.create({ ...userData, role, profilePicture });

			return newUser;
		} else {

			await UserRoleModel.InsertRoles();
			const defaultRole = await UserRoleModel.getDefaultRole();
			const profilePicture = await mediaModel.create({
				type: 'profile',
				url: generateGravatarUrl(userData.email),
				uploadId: userData.email,
				size: 200,
				mediaType: 'image'
			});
			const newUser = await UserModel.create({ ...userData, role: defaultRole, profilePicture });

			return newUser;
		}
	};

	findByEmail = async (email: string) => {

		const user = await UserModel.findByEmail(email );

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
