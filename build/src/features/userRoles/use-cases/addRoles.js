"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAddRoles = void 0;
function makeAddRoles({ repository, }) {
    return async () => {
        const roles = await repository.createRoles();
        return roles;
    };
}
exports.makeAddRoles = makeAddRoles;

//# sourceMappingURL=addRoles.js.map
