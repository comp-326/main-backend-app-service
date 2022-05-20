"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeSendAccountActivationLink = void 0;
const ExpressError_1 = require("../../../common/errors/ExpressError");
function makeSendAccountActivationLink({ repository }) {
    return async (email) => {
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
        return existing;
    };
}
exports.makeSendAccountActivationLink = makeSendAccountActivationLink;

//# sourceMappingURL=sendActivationLink.js.map
