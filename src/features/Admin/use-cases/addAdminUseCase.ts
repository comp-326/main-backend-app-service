import { AdminRepositoryType } from '../repository';
import { IUser } from '@exam-cell-features/Users/models/interfaces';
import createAdminEntity from '../entities';
import userModel  from '@exam-cell-features/Users/models';

export function makeAddNewAdminUseCase({ repository }: { repository: AdminRepositoryType }) {
	return async (adminData: IUser) => {
		const { getBio, getEmail, getFirstName, getGender, getIsActive, getIsDeleted, getLastName, getPassword, getProfilePic, getRole } = await createAdminEntity(adminData);
		const saved = await repository.createNewAdmin({
			model:userModel
		})({
			email:getEmail(),
			firstName:getFirstName(),
			lastName:getLastName(),
			gender:getGender(),
			password:getPassword(),
			role:getRole(),
			bio:getBio(),
			isActive:getIsActive(),
			profilePicture:getProfilePic(),
			isDeleted:getIsDeleted()
		});

		return saved;
	};
}