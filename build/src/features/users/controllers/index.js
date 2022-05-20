"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ExpressError_1 = require("../../../common/errors/ExpressError");
class UserController {
    constructor(useCase) {
        this.softDeleteUser = async (req, res, next) => {
            await this.useCase.softRemoveUser(req.params.id);
            return res.sendStatus(200);
        };
        this.deleteUser = async (req, res, next) => {
            await this.useCase.hardRemoveUser(req.params.id);
            return res.sendStatus(200);
        };
        this.findUserByEmail = async (req, res, next) => {
            try {
                const data = await this.useCase.listUserByEmail(req.params.email);
                return res.status(200).json({ data });
            }
            catch (err) {
                return next(err);
            }
        };
        this.findUserById = async (req, res, next) => {
            const data = await this.useCase.listUserById(req.params.id);
            return res.status(200).json({ data });
        };
        this.createUser = async (req, res, next) => {
            try {
                await this.useCase.addNewUser(req.body);
                return res.sendStatus(201);
            }
            catch (err) {
                return next(err);
            }
        };
        this.getAccountActivationLink = async (req, res, next) => {
            try {
                await this.useCase.sendAccountActivationLink(req.body.email);
                return res.status(200).json({
                    message: 'Activation email has been sent to your email address',
                    status: 'ok',
                    statusCode: 200,
                    params: {},
                    data: {}
                });
            }
            catch (err) {
                return next(err);
            }
        };
        this.getPasswordResetLink = async (req, res, next) => {
            try {
                await this.useCase.sendPasswordResetLink(req.body.email);
                return res.status(200).json({
                    message: 'Password reset email has been sent to your email address',
                    status: 'ok',
                    statusCode: 200,
                    params: {},
                    data: {}
                });
            }
            catch (err) {
                return next(err);
            }
        };
        this.activateAccount = async (req, res, next) => {
            try {
                await this.useCase.activateUserAccount(req.params.token);
                return res.sendStatus(200);
            }
            catch (err) {
                return next(err);
            }
        };
        this.findUsers = async (req, res, next) => {
            const { limit, page } = req.params;
            const data = await this.useCase.listUsers({
                limit: limit ? parseInt(limit) : 20,
                offset: page ? parseInt(page) : 1
            });
            return res
                .status(200)
                .json({
                data,
                message: 'Success',
            });
        };
        this.updateAccount = async (req, res, next) => {
            try {
                const { id } = req.params;
                await this.useCase.editUserProfile(id, req.body);
                return res.sendStatus(200);
            }
            catch (err) {
                return next(err);
            }
        };
        this.updateProfilePic = async (req, res, next) => {
            try {
                if (!req.file) {
                    throw new ExpressError_1.ExpressError({
                        data: {},
                        message: 'No file uploaded',
                        status: 'warning',
                        statusCode: 400
                    });
                }
                req.body.file = req.file;
                const { id } = req.params;
                await this.useCase.editUserProfile(id, req.body);
                return res.status(200).json({});
            }
            catch (err) {
                return next(err);
            }
        };
        this.updatePassword = async (req, res, next) => {
            try {
                await this.useCase.resetPassword(req.params.token, req.body);
                return res.status(200).json('Success');
            }
            catch (err) {
                return next(err);
            }
        };
        this.useCase = useCase;
    }
}
exports.default = UserController;

//# sourceMappingURL=index.js.map
