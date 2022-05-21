// import { ExpressError } from '@backend-service/common/errors/ExpressError';
import tokenGEN from '@backend-service/utils/jwt/tokenGEN';
import { IAuthController, IAuthUseCase } from '../interfaces';
import { INext, IRequest, IResponse } from '@backend-service/common/types';


export class AuthController implements IAuthController {
	constructor(private readonly authUseCase: IAuthUseCase) { }

	login = async (req: IRequest, res: IResponse, next: INext) => {
		try {
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			const { password: _use, ...props } = await this.authUseCase.login(req.body);
			const authToken = tokenGEN.generateEncodedToken({
				userId: props._id,
				email: props.email
			});

			// if(req.headers.cookie){
			// 	const cookies = req.headers.cookie.split(';');
			// 	cookies.forEach(cookie => {
			// 		if(cookie.includes('access_token')){
			// 			throw new ExpressError({
			// 				message: 'You are already logged in',
			// 				data:{},
			// 				status:'warning',
			// 				statusCode: 401
						
			// 			});
			// 		}
			// 	});
			// }
			// req.cookies.

			return res.cookie('access_token', authToken, {
				httpOnly: true,
				secure: true,
				maxAge: 1000 * 60 * 60 * 24 * 7,
				path: '/'
			}).json({
				message: 'Login successful',
				user: props
			});
		} catch (err) {
			return next(err);
		}

	};

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	logout = async (req: IRequest, res: IResponse, next: INext) => {

		return res.clearCookie('access_token').status(200).json({
			message: 'Account successfully logged out',
			success: true
		});
	};

}