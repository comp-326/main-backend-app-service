import { ExpressError } from '@exam-cell-common/errors/ExpressError';
import { IUserRepository } from '@exam-cell-features/users/interfaces';
import { JWTPayloadType } from '@exam-cell-common/types';
import createUser from '../entities';
import tokenGEN from '@exam-cell-utils/jwt/tokenGEN';


export  function makeActivateUserAccount({repository}:{repository:IUserRepository}){
	return async (token: string) => {
		const { userId ,email} =await tokenGEN.decodeSimpleToken(token) as unknown as JWTPayloadType;
		if (!email) {
			throw new ExpressError({
				message: 'Email is required',
				status: 'warning',
				statusCode: 400,
				data: {
					email
				}
			});
		}
		const existing = await repository.findByEmail(email);
		if (!existing) {
			throw new ExpressError({
				message: 'User not found',
				status: 'warning',
				statusCode: 404,
				data: {
					email
				}
			});
		}
		if (existing.isActive) {
			throw new ExpressError({
				message: 'User account already activated',
				status: 'warning',
				statusCode: 409,
				data: {
				}
			});
		}
		if (existing.isDeleted) {
			throw new ExpressError({
				message: 'User account has been deleted',
				status: 'warning',
				statusCode: 409,
				data: {
				}
			});
		}
		if (!token) {
			throw new ExpressError({
				message: 'Token is required',
				status: 'warning',
				statusCode: 400,
				data: {
					token
				}
			});
		}
		if (!userId) {
			throw new ExpressError({
				message: 'Token is invalid',
				status: 'warning',
				statusCode: 400,
				data: {
					token
				}
			});
		}
		if (userId !== existing.id) {
			throw new ExpressError({
				message: 'Token is invalid',
				status: 'warning',
				statusCode: 400,
				data: {
					token
				}
			});
		}
		const { getBio, getEmail, getFirstName, getGender, getLastName, getPassword, getProfilePic } = await createUser({ ...existing._doc, isActive: true });
		const user = await repository.updateById(existing._id, {
			email: getEmail(),
			isActive: true,
			firstName: getFirstName(),
			lastName: getLastName(),
			gender: getGender(),
			password: getPassword(),
			bio: getBio(),
			profilePicture: getProfilePic()
		});

		return user;
	};
}