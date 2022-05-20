"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseDomain = void 0;
class BaseDomain {
    constructor(pathName, router) {
        this.expressRouter = router;
        this._pathName = `/api/v1/${pathName}`;
    }
    get pathName() {
        return this._pathName;
    }
}
exports.BaseDomain = BaseDomain;

//# sourceMappingURL=baseDomain.js.map
