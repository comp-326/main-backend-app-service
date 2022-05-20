"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAddNewUser = void 0;
const ExpressError_1 = require("../../../common/errors/ExpressError");
const entities_1 = __importDefault(require("./../entities"));
function makeAddNewUser({ repository }) {
    return async (userData) => {
        const { getBio, getEmail, getFirstName, getGender, getIsActive, getIsDelete, getLastName, getPassword, getProfilePic, getRole } = await (0, entities_1.default)(userData);
        const existing = await repository.findByEmail(getEmail());
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
        const user = await repository.createUser({
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
}
exports.makeAddNewUser = makeAddNewUser;

//# sourceMappingURL=addNewUser.js.map
