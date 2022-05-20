"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAddRoles = void 0;
function makeAddRoles({ repository, }) {
    return async () => {
        const roles = await repository.findRoles();
        return roles;
    };
}
exports.makeAddRoles = makeAddRoles;

//# sourceMappingURL=listRoles.js.map
