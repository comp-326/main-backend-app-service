"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoleUseCases = void 0;
class UserRoleUseCases {
    constructor(repository) {
        this.addRoles = async () => {
            const roles = await this.repository.createRoles();
            return roles;
        };
        this.listRoles = async () => {
            const roles = await this.repository.findRoles();
            return roles;
        };
        this.repository = repository;
    }
}
exports.UserRoleUseCases = UserRoleUseCases;

//# sourceMappingURL=index.js.map
