"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUseCase = void 0;
const ExpressError_1 = require("../../../common/errors/ExpressError");
const entities_1 = __importDefault(require("../entities"));
const fileSystem_1 = require("../../../utils/fileSystem");
const entities_2 = __importDefault(require("../entities"));
const tokenGEN_1 = __importDefault(require("../../../utils/jwt/tokenGEN"));
const ObjectId_validator_1 = __importDefault(require("../../../utils/mongo/ObjectId-validator"));
class UserUseCase {
    constructor(repository) {
        this.editUserProfilePic = async (userId, userData) => {
            if (!userId && userData.file) {
                await (0, fileSystem_1.deleteFile)(userData.file.path);
                throw new ExpressError_1.ExpressError({
                    data: {},
                    message: 'User id not provided',
                    status: 'error',
                    statusCode: 400
                });
            }
            if (!(0, ObjectId_validator_1.default)(userId) && userData.file) {
                await (0, fileSystem_1.deleteFile)(userData.file.path);
                throw new ExpressError_1.ExpressError({
                    data: {},
                    message: 'Please provide a valid user id',
                    status: 'error',
                    statusCode: 400
                });
            }
            return { done: userData };
        };
        this.addNewUser = async (userData) => {
            const { getBio, getEmail, getFirstName, getGender, getIsActive, getIsDelete, getLastName, getPassword, getProfilePic, getRole } = await (0, entities_2.default)(userData);
            const existing = await this.repository.findByEmail(getEmail());
            if (existing) {
                throw new ExpressError_1.ExpressError({
                    message: 'User already exists',
                    status: 'warning',
                    statusCode: 409,
                    data: {
                        email: getEmail()
                    }
                });
            }
            const user = await this.repository.createUser({
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
        this.sendAccountActivationLink = async (email) => {
            if (!email) {
                throw new ExpressError_1.ExpressError({
                    message: 'Email is required',
                    status: 'warning',
                    statusCode: 400,
                    data: {
                        email
                    }
                });
            }
            const existing = await this.repository.findByEmail(email);
            if (!existing) {
                throw new ExpressError_1.ExpressError({
                    message: 'User not found',
                    status: 'warning',
                    statusCode: 404,
                    data: {
                        email
                    }
                });
            }
            if (existing.isActive) {
                throw new ExpressError_1.ExpressError({
                    message: 'User account already activated',
                    status: 'warning',
                    statusCode: 409,
                    data: {}
                });
            }
            return existing;
        };
        this.editUserProfile = async (userId, userData) => {
            if (!userId) {
                throw new ExpressError_1.ExpressError({
                    message: 'User id not provided',
                    status: 'error',
                    statusCode: 400,
                    data: {
                        userId: userId
                    }
                });
            }
            if (!(0, ObjectId_validator_1.default)(userId)) {
                throw new ExpressError_1.ExpressError({
                    message: 'Please provide a valid user id',
                    status: 'error',
                    statusCode: 400,
                    data: {}
                });
            }
            const existing = await this.repository.findById(userId);
            if (!existing) {
                throw new ExpressError_1.ExpressError({
                    message: 'User not found',
                    status: 'error',
                    statusCode: 404,
                    data: {}
                });
            }
            const { getBio, getEmail, getFirstName, getIsActive, getGender, getLastName, getPassword, getProfilePic } = await (0, entities_1.default)(Object.assign(Object.assign({}, existing._doc), userData));
            const user = await this.repository.updateById(existing._id, {
                email: getEmail(),
                isActive: getIsActive(),
                firstName: getFirstName(),
                lastName: getLastName(),
                gender: getGender(),
                password: getPassword(),
                bio: getBio(),
                profilePicture: getProfilePic()
            });
            return user;
        };
        this.listUserById = async (id) => {
            if (!id) {
                throw new ExpressError_1.ExpressError({
                    message: 'User id not provided',
                    status: 'error',
                    statusCode: 400,
                    data: {
                        userId: id
                    }
                });
            }
            if (!(0, ObjectId_validator_1.default)(id)) {
                throw new ExpressError_1.ExpressError({
                    message: 'Please provide a valid user id',
                    status: 'error',
                    statusCode: 400,
                    data: {}
                });
            }
            const user = await this.repository.findById(id);
            if (!user) {
                throw new ExpressError_1.ExpressError({
                    message: 'User profile not found',
                    status: 'error',
                    statusCode: 404,
                    data: {}
                });
            }
            const _a = user._doc, { password: _docs } = _a, props = __rest(_a, ["password"]);
            return props;
        };
        this.listUserByEmail = async (email) => {
            if (!email) {
                throw new ExpressError_1.ExpressError({
                    message: 'Email not provided',
                    status: 'error',
                    statusCode: 400,
                    data: {
                        email: email
                    }
                });
            }
            const user = await this.repository.findByEmail(email);
            if (!user) {
                throw new ExpressError_1.ExpressError({
                    message: 'User not found',
                    status: 'warning',
                    statusCode: 404,
                    data: {}
                });
            }
            const _a = user._doc, { password: _do } = _a, props = __rest(_a, ["password"]);
            return props;
        };
        this.listUsers = async ({ limit, offset }) => {
            const users = await this.repository.find(limit, offset);
            if (users.length === 0) {
                throw new ExpressError_1.ExpressError({
                    message: 'No users found',
                    status: 'warning',
                    statusCode: 404,
                    data: {
                        limit,
                        offset
                    }
                });
            }
            return users;
        };
        this.activateUserAccount = async (token) => {
            const { userId, email } = await tokenGEN_1.default.decodeSimpleToken(token);
            if (!email) {
                throw new ExpressError_1.ExpressError({
                    message: 'Email is required',
                    status: 'warning',
                    statusCode: 400,
                    data: {
                        email
                    }
                });
            }
            const existing = await this.repository.findByEmail(email);
            if (!existing) {
                throw new ExpressError_1.ExpressError({
                    message: 'User not found',
                    status: 'warning',
                    statusCode: 404,
                    data: {
                        email
                    }
                });
            }
            if (existing.isActive) {
                throw new ExpressError_1.ExpressError({
                    message: 'User account already activated',
                    status: 'warning',
                    statusCode: 409,
                    data: {}
                });
            }
            if (existing.isDeleted) {
                throw new ExpressError_1.ExpressError({
                    message: 'User account has been deleted',
                    status: 'warning',
                    statusCode: 409,
                    data: {}
                });
            }
            if (!token) {
                throw new ExpressError_1.ExpressError({
                    message: 'Token is required',
                    status: 'warning',
                    statusCode: 400,
                    data: {
                        token
                    }
                });
            }
            if (!userId) {
                throw new ExpressError_1.ExpressError({
                    message: 'Token is invalid',
                    status: 'warning',
                    statusCode: 400,
                    data: {
                        token
                    }
                });
            }
            if (userId !== existing.id) {
                throw new ExpressError_1.ExpressError({
                    message: 'Token is invalid',
                    status: 'warning',
                    statusCode: 400,
                    data: {
                        token
                    }
                });
            }
            const { getBio, getEmail, getFirstName, getGender, getLastName, getPassword, getProfilePic } = await (0, entities_1.default)(Object.assign(Object.assign({}, existing._doc), { isActive: true }));
            const user = await this.repository.updateById(existing._id, {
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
        this.resetPassword = async (token, data) => {
            if (!token) {
                throw new ExpressError_1.ExpressError({
                    message: 'Token is required',
                    status: 'warning',
                    statusCode: 400,
                    data: {
                        token
                    }
                });
            }
            const { userId } = await tokenGEN_1.default.decodeSimpleToken(token);
            if (!userId) {
                throw new ExpressError_1.ExpressError({
                    message: 'Token is invalid',
                    status: 'warning',
                    statusCode: 400,
                    data: {
                        token
                    }
                });
            }
            const existing = await this.repository.findById(userId);
            if (!existing) {
                throw new ExpressError_1.ExpressError({
                    message: 'User not found',
                    status: 'warning',
                    statusCode: 404,
                    data: {
                        userId
                    }
                });
            }
            if (existing.isDeleted) {
                throw new ExpressError_1.ExpressError({
                    message: 'User account has been deleted',
                    status: 'warning',
                    statusCode: 409,
                    data: {}
                });
            }
            if (!existing.isActive) {
                throw new ExpressError_1.ExpressError({
                    message: 'User account not activated',
                    status: 'warning',
                    statusCode: 409,
                    data: {}
                });
            }
            if (!data.password) {
                throw new ExpressError_1.ExpressError({
                    message: 'Password is required',
                    status: 'warning',
                    statusCode: 400,
                    data: {}
                });
            }
            if (!data.confirmPassword) {
                throw new ExpressError_1.ExpressError({
                    message: 'Confirm password is required',
                    status: 'warning',
                    statusCode: 400,
                    data: {}
                });
            }
            if (data.password !== data.confirmPassword) {
                throw new ExpressError_1.ExpressError({
                    message: 'Passwords do not match',
                    status: 'warning',
                    statusCode: 400,
                    data: {}
                });
            }
            const { getBio, getEmail, getFirstName, getGender, getLastName, getPassword, getProfilePic } = await (0, entities_1.default)(Object.assign(Object.assign({}, existing._doc), { password: data.password }));
            const user = await this.repository.updateById(existing._id, {
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
        this.softRemoveUser = async (id) => {
            const user = await this.repository.softDeleteUser(id);
            return user;
        };
        this.hardRemoveUser = async (id) => {
            const user = await this.repository.deleteById(id);
            return user;
        };
        this.sendPasswordResetLink = async (email) => {
            if (!email) {
                throw new ExpressError_1.ExpressError({
                    message: 'Email is required',
                    status: 'warning',
                    statusCode: 400,
                    data: {
                        email
                    }
                });
            }
            const existing = await this.repository.findByEmail(email);
            if (!existing) {
                throw new ExpressError_1.ExpressError({
                    message: 'User not found',
                    status: 'warning',
                    statusCode: 404,
                    data: {
                        email
                    }
                });
            }
            if (!existing.isActive) {
                throw new ExpressError_1.ExpressError({
                    message: 'User account not activated',
                    status: 'warning',
                    statusCode: 409,
                    data: {}
                });
            }
            return existing;
        };
        this.repository = repository;
    }
}
exports.UserUseCase = UserUseCase;

//# sourceMappingURL=index.js.map
