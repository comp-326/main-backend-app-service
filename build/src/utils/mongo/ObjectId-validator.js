"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
function validateMongodbId(objectId) {
    if (mongoose_1.Types.ObjectId.isValid(objectId))
        return String(new mongoose_1.Types.ObjectId(objectId)) === objectId ? true : false;
    return false;
}
exports.default = validateMongodbId;

//# sourceMappingURL=ObjectId-validator.js.map
