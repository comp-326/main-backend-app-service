import { IAuthRepository } from '../interfaces';
import userModel from '@exam-cell-features/users/models';


class AuthRepository implements IAuthRepository {
	getUserByEmail=async (email: string) => {
		const user =  await userModel.findOne({email}).select('+password');

		return user;
	};

}

export default new AuthRepository();