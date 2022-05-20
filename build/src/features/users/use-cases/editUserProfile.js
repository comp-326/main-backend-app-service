"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeEditUserProfile = void 0;
const ExpressError_1 = require("../../../common/errors/ExpressError");
const entities_1 = __importDefault(require("../entities"));
const ObjectId_validator_1 = __importDefault(require("../../../utils/mongo/ObjectId-validator"));
function makeEditUserProfile({ repository }) {
    return async (userId, userData) => {
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
        const existing = await repository.findById(userId);
        if (!existing) {
            throw new ExpressError_1.ExpressError({
                message: 'User not found',
                status: 'error',
                statusCode: 404,
                data: {}
            });
        }
        const { getBio, getEmail, getFirstName, getIsActive, getGender, getLastName, getPassword, getProfilePic } = await (0, entities_1.default)(Object.assign(Object.assign({}, existing._doc), userData));
        const user = await repository.updateById(existing._id, {
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
}
exports.makeEditUserProfile = makeEditUserProfile;

//# sourceMappingURL=editUserProfile.js.map
