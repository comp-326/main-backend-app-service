import { ExpressError } from '@exam-cell-common/errors/ExpressError';
import { IUser } from '@exam-cell-features/users/models/interfaces';
import passwords from '@exam-cell-utils/passwords';
import {IAuthRepository, IAuthUseCase} from './../interfaces'; 

export class AuthUseCase implements IAuthUseCase{
	constructor(private readonly repository:IAuthRepository){}

	login=async (userData: Pick<IUser, keyof { email: string; password: string; }>) =>{
		if(!userData.email){
			throw new ExpressError({
				data:{},
				message:'Email required',
				status:'warning',
				statusCode:400
			});
		}
		if(!userData.password){
			throw new ExpressError({
				data:{},
				message:'Password required',
				status:'warning',
				statusCode:400
			});
		}
		const user = await this.repository.getUserByEmail(userData.email);
		if(!user){
			throw new ExpressError({
				data:{},
				message:'Account does not exist',
				status:'warning',
				statusCode:404
			});
		}
		if(!(await passwords.comparePassword(userData.password,user.password))){
			throw new ExpressError({
				data:{},
				message:'Invalid login credentials',
				status:'warning',
				statusCode:404
			});
		}
		if(!user.isActive){
			throw new ExpressError({
				data:{},
				message:'Account is not active',
				status:'warning',
				statusCode:404
			});
		}

		return user._doc;
	};
}