"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeEditProfilePic = void 0;
const ExpressError_1 = require("../../../common/errors/ExpressError");
const fileSystem_1 = require("../../../utils/fileSystem");
const ObjectId_validator_1 = __importDefault(require("../../../utils/mongo/ObjectId-validator"));
function makeEditProfilePic({ repository }) {
    return async (userId, userData) => {
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
        await repository.updateById(userId, userData);
        return { done: userData };
    };
}
exports.makeEditProfilePic = makeEditProfilePic;

//# sourceMappingURL=editUserProfilePic.js.map
