"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoleController = void 0;
class UserRoleController {
    constructor(useCase) {
        this.createRoles = async (req, res, next) => {
            const response = await this.useCase.addRoles();
            return res.status(201).json({ data: response });
        };
        this.getRoles = async (req, res, next) => {
            const response = await this.useCase.listRoles();
            return res.status(200).json({ data: response });
        };
        this.useCase = useCase;
    }
}
exports.UserRoleController = UserRoleController;

//# sourceMappingURL=index.js.map
