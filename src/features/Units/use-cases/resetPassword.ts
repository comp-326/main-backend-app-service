import { ExpressError } from '@exam-cell-common/errors/ExpressError';
import { IUserRepository } from './../interfaces/index';
import { JWTPayloadType } from '@exam-cell-common/types';
import createUser from '../entities';
import tokenGEN from '@exam-cell-utils/jwt/tokenGEN';

export function resetPassword({repository}:{repository:IUserRepository}){
	return async (token: string, data: { password: string, confirmPassword: string }) => {
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
		const {userId} =await tokenGEN.decodeSimpleToken(token) as unknown as JWTPayloadType;
		
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
		const existing = await repository.findById(userId);
		if (!existing) {
			throw new ExpressError({
				message: 'User not found',
				status: 'warning',
				statusCode: 404,
				data: {
					userId
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
		if (!existing.isActive) {
			throw new ExpressError({
				message: 'User account not activated',
				status: 'warning',
				statusCode: 409,
				data: {
				}
			});
		}
		if (!data.password) {
			throw new ExpressError({
				message: 'Password is required',
				status: 'warning',
				statusCode: 400,
				data: {
				}
			});
		}
		if (!data.confirmPassword) {
			throw new ExpressError({
				message: 'Confirm password is required',
				status: 'warning',
				statusCode: 400,
				data: {
				}
			});
		}
		if (data.password !== data.confirmPassword) {
			throw new ExpressError({
				message: 'Passwords do not match',
				status: 'warning',
				statusCode: 400,
				data: {
				}
			});
		}
		const { getBio, getEmail, getFirstName, getGender, getLastName, getPassword, getProfilePic } = await createUser({ ...existing._doc, password: data.password });
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