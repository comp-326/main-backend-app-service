"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeActivateUserAccount = void 0;
const ExpressError_1 = require("../../../common/errors/ExpressError");
const entities_1 = __importDefault(require("../entities"));
const tokenGEN_1 = __importDefault(require("../../../utils/jwt/tokenGEN"));
function makeActivateUserAccount({ repository }) {
    return async (token) => {
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
        const existing = await repository.findByEmail(email);
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
exports.makeActivateUserAccount = makeActivateUserAccount;

//# sourceMappingURL=activateUserAccount.js.map
