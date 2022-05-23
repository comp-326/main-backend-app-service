/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ExpressError } from '@backend-service-common/errors/ExpressError';
import { INext, IRequest, IResponse } from '@backend-service-common/types';
import { IUserController, IUserUseCases } from './../interfaces';


class UserController implements IUserController{
	protected useCase: IUserUseCases;

	constructor(useCase: IUserUseCases){
		this.useCase = useCase;
	}

	/**
	 * Soft delete a user from db
	 * @summary A simple delete of user entity
	 * @param {IRequest} req - Express default request obj
	 * @param {IResponse} res - Express default rquest obj
	 * @return {IResponse} Response date returned by user usecase
	 */
	softDeleteUser = async (req: IRequest, res: IResponse, next: INext) => {
		await this.useCase.softRemoveUser(
			req.params.id
		);

		return res.sendStatus(200);
	};


	deleteUser = async (req: IRequest, res: IResponse, next: INext) => {
		await this.useCase.hardRemoveUser(
			req.params.id
		);

		return res.sendStatus(200);
	};


	findUserByEmail = async (req: IRequest, res: IResponse, next: INext) => {

		try {

			const data = await this.useCase.listUserByEmail(
				req.params.email
			);

			return res.status(200).json({ data });
		} catch (err) {
			return next(err);
		}
	};


	findUserById = async (req: IRequest, res: IResponse, next: INext) => {
		const data = await this.useCase.listUserById(
			req.params.id
		);

		return res.status(200).json({ data });
	};


	createUser = async (req: IRequest, res: IResponse, next: INext) => {
		try {

			await this.useCase.addNewUser(
				req.body
			);

			return res.sendStatus(201);
		} catch (err: any) {
			return next(err);
		}
	};


	getAccountActivationLink = async (req: IRequest, res: IResponse, next: INext) => {
		try {
			await this.useCase.sendAccountActivationLink(
				req.body.email
			);

			return res.status(200).json({
				message: 'Activation email has been sent to your email address',
				status: 'ok',
				statusCode: 200,
				params: {},
				data: {}
			});
		} catch (err) {
			return next(err);
		}
	};


	getPasswordResetLink = async (req: IRequest, res: IResponse, next: INext) => {
		try {
			await this.useCase.sendPasswordResetLink(
				req.body.email
			);

			return res.status(200).json({
				message: 'Password reset email has been sent to your email address',
				status: 'ok',
				statusCode: 200,
				params: {},
				data: {}
			});
		} catch (err) {
			return next(err);
		}
	};

	activateAccount = async (req: IRequest, res: IResponse, next: INext) => {
		try {
			
			await this.useCase.activateUserAccount(
				req.params.token
			);

			return res.sendStatus(200);
		} catch (err) {
			return next(err);
		}
	};


	findUsers = async (req: IRequest, res: IResponse, next: INext) => {
		const { limit, page } = req.params;
		const data = await this.useCase.listUsers({
			limit: limit ? parseInt(limit) : 20,
			offset: page ? parseInt(page) : 1
		});

		return res
			.status(200)
			.json(
				{
					data,
					message: 'Success',
				}
			);
	};


	updateAccount = async (req: IRequest, res: IResponse, next: INext) => {
		try{

			const { id } = req.params;
			
			await this.useCase.editUserProfile(
				id,
				req.body
			);
				
			return res.sendStatus(200);
		}catch(err) {

			return next(err);
		}
			
	};


	updateProfilePic = async (req: IRequest, res: IResponse, next: INext) => {
		try {
			if (!req.file) {
				throw new ExpressError({
					data: {},
					message: 'No file uploaded',
					status: 'warning',
					statusCode: 400
				});
			}
			req.body.file = req.file;

			const { id } = req.params;
			await this.useCase.editUserProfile(id,
				req.body
			);

			return res.status(200).json({});
		} catch (err) {
			return next(err);
		}
	};


	updatePassword = async (req: IRequest, res: IResponse, next: INext) => {
		try {
			await this.useCase.resetPassword(req.params.token, req.body);

			return res.status(200).json('Success');
		} catch (err) {
			return next(err);
		}
	};
}

export default UserController;
