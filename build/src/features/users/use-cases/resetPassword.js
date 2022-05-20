"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetPassword = void 0;
const ExpressError_1 = require("../../../common/errors/ExpressError");
const entities_1 = __importDefault(require("../entities"));
const tokenGEN_1 = __importDefault(require("../../../utils/jwt/tokenGEN"));
function resetPassword({ repository }) {
    return async (token, data) => {
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
        const existing = await repository.findById(userId);
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
exports.resetPassword = resetPassword;

//# sourceMappingURL=resetPassword.js.map
