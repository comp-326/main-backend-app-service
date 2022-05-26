import { ExpressError } from '@exam-cell-common/errors/ExpressError';
import { IUser } from '@exam-cell-features/Users/modelsinterfaces';
import { IUserRepository } from '../interfaces';
import entity from './../entities';

export  function makeAddNewUser({ repository }: { repository: IUserRepository }) {
	return async (userData: IUser) => {
		const { getBio, getEmail, getFirstName, getGender, getIsActive, getIsDelete, getLastName, getPassword, getProfilePic, getRole } = await entity(userData);
		const existing = await repository.findByEmail(getEmail());
		if (existing) {
			throw new ExpressError({
				message: 'User already exists',
				status: 'warning',
				statusCode: 409,
				data: {
					email: getEmail()
				}

			});
		}
		const user = await repository.createUser({
			email: getEmail(),
			firstName: getFirstName(),
			lastName: getLastName(),
			password: getPassword(),
			gender: getGender(),
			bio: getBio(),
			isActive: getIsActive(),
			isDeleted: getIsDelete(),
			profilePicture: getProfilePic(),
			role: getRole()
		});

		return user;

	};
}