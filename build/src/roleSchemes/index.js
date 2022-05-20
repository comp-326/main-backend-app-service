"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config");
const models_1 = __importDefault(require("../features/userRoles/models"));
class RoleMigrator {
    constructor() {
        this.migrateUserPermissions = async () => {
            await models_1.default.InsertRoles();
        };
        this.migrate = async () => {
            await this.migrateUserPermissions();
            console.log(`Role migration successful----${config_1.environmentConfig.NODE_ENV}`);
        };
    }
}
(async () => {
    const roleMigrator = new RoleMigrator();
    await roleMigrator.migrate();
    setTimeout(() => {
        process.exit(0);
    }, 3000);
})();

//# sourceMappingURL=index.js.map
