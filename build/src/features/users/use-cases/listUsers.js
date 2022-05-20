"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeListUsers = void 0;
const ExpressError_1 = require("../../../common/errors/ExpressError");
function makeListUsers({ repository }) {
    return async ({ limit, offset }) => {
        const users = await repository.find(limit, offset);
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
}
exports.makeListUsers = makeListUsers;

//# sourceMappingURL=listUsers.js.map
