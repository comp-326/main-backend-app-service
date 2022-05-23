/* eslint-disable @typescript-eslint/no-non-null-assertion */
import Permissions from '@exam-cell-constants/userPermissions';
import RoleModel from '@exam-cell-features/userRoles/models';
import TokenGEN from '@exam-cell-utils/jwt/tokenGEN';
import UserModel from '@exam-cell-features/users/models';
import { environmentConfig } from '@exam-cell-config';
import jwt from 'jsonwebtoken';
import { INext, IRequest, IResponse, JWTPayloadType } from '@exam-cell-common/types';


const verifyCookie = (req: IRequest, res: IResponse, next: INext) => {
	try {
		if (!req.cookies) {
			return res.status(401).json({
				message: 'Please login to access this page',
				status: 'warning',
				statusCode: 401,
				data: {}
			});
		}
		const token = req.cookies['access_token'];
		if (!token) {
			return res.status(401).json({
				message: 'Please login to access this page',
				status: 'warning',
				statusCode: 401,
				data: {}
			});
		}
		const jwtToken = TokenGEN.decodeEncodedToken(token);
		if (!jwtToken) {
			return res.status(401).json({
				message: 'Please login to access this page',
				status: 'warning',
				statusCode: 401,
				data: {}
			});
		}
		const payload = jwt.verify(
			jwtToken,
			environmentConfig.SECRET_KEY
		) as JWTPayloadType;
		req.user = payload;

		return next();
	} catch {
		return res.status(401).json({
			message: 'Login session has expired',
			status: 'warning',
			statusCode: 401,
			data: {}
		});
	}
};

export const	loginRequired = async (req: IRequest, res: IResponse, next: INext) => {
	try {
		verifyCookie(req, res, async () => {
			const user = await UserModel.findById(req.user.userId);
			if(!user){
				return res.status(401).json({
					message: 'Please login to access this page',
					status: 'warning',
					statusCode: 401,
					data: {}
				});
			}
			if (!user!.isActive) {
				return res.status(401).json({
					message: 'Please activate your account',
					status: 'warning',
					statusCode: 401,
					data: {}
				});
			}
			const role = await RoleModel.findById(user!.role);
			const permitted =  role!.hasPermission(Permissions.USER);
			if (!permitted) 
				return res.sendStatus(403);
				
			return next();
		});
	} catch (error) {
		return next(error);
	}
};
export const studentRequired = async (req: IRequest, res: IResponse, next: INext) => {
	try {
		loginRequired(req, res, async () => {
			const user = await UserModel.findById(req.user.userId);
			const role = await RoleModel.findById(user!.role);
			const permitted =  role!.hasPermission(Permissions.ADMIN);
			if (!permitted) 
				return res.sendStatus(403);
				
			return next();
		});
	} catch (error) {
		return next(error);
	}
};
export const lecturerRequired = async (req: IRequest, res: IResponse, next: INext) => {
	try {
		loginRequired(req, res, async () => {
			const user = await UserModel.findById(req.user.userId);
			const role = await RoleModel.findById(user!.role);
			const permitted =  role!.hasPermission(Permissions.LECTURER);
			if (!permitted) 
				return res.sendStatus(403);
				
			return next();
		});
	} catch (error) {
		return next(error);
	}
};
export const moderatorRequired = async (req: IRequest, res: IResponse, next: INext) => {
	try {
		loginRequired(req, res, async () => {
			const user = await UserModel.findById(req.user.userId);
			const role = await RoleModel.findById(user!.role);
			const permitted =  role!.hasPermission(Permissions.MODERATOR);
			if (!permitted) 
				return res.sendStatus(403);
				
			return next();
		});
	} catch (error) {
		return next(error);
	}
};

export const adminRequired = async (req: IRequest, res: IResponse, next: INext) => {
	try {
		loginRequired(req, res, async () => {
			const user = await UserModel.findById(req.user.userId);
			const role = await RoleModel.findById(user!.role);
			const permitted =  role!.hasPermission(Permissions.ADMIN);
			if (!permitted) 
				return res.sendStatus(403);
				
			return next();
		});
	} catch (error) {
		return next(error);
	}
};

