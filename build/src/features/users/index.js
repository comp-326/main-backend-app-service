"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const activateAccountRoute_1 = __importDefault(require("./routes/activateAccountRoute"));
const deleteUserRoute_1 = __importDefault(require("./routes/deleteUserRoute"));
const forgotPasswordRoute_1 = __importDefault(require("./routes/forgotPasswordRoute"));
const getActivationLinkRoute_1 = __importDefault(require("./routes/getActivationLinkRoute"));
const getUserByEmailRoute_1 = __importDefault(require("./routes/getUserByEmailRoute"));
const getUserByIdRoute_1 = __importDefault(require("./routes/getUserByIdRoute"));
const getUsersRoute_1 = __importDefault(require("./routes/getUsersRoute"));
const newUserRoute_1 = __importDefault(require("./routes/newUserRoute"));
const resetPasswordRoute_1 = __importDefault(require("./routes/resetPasswordRoute"));
const updateProfilePic_1 = __importDefault(require("./routes/updateProfilePic"));
const updateProfileRoute_1 = __importDefault(require("./routes/updateProfileRoute"));
exports.default = ({ app, pathName }) => {
    (0, activateAccountRoute_1.default)(app)(pathName);
    (0, deleteUserRoute_1.default)(app)(pathName);
    (0, forgotPasswordRoute_1.default)(app)(pathName);
    (0, getActivationLinkRoute_1.default)(app)(pathName);
    (0, getUserByEmailRoute_1.default)(app)(pathName);
    (0, getUserByIdRoute_1.default)(app)(pathName);
    (0, getUsersRoute_1.default)(app)(pathName);
    (0, newUserRoute_1.default)(app)(pathName);
    (0, resetPasswordRoute_1.default)(app)(pathName);
    (0, updateProfilePic_1.default)(app)(pathName);
    (0, updateProfileRoute_1.default)(app)(pathName);
};

//# sourceMappingURL=index.js.map
