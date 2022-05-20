"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeHardRemoveUser = void 0;
function makeHardRemoveUser({ repository }) {
    return async (id) => {
        const user = await repository.deleteById(id);
        return user;
    };
}
exports.makeHardRemoveUser = makeHardRemoveUser;

//# sourceMappingURL=hardRemoveUser.js.map
