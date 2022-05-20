"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1({ text }) {
    const regex = new RegExp(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
    return text.match(regex);
}
exports.default = default_1;

//# sourceMappingURL=extractEmails.js.map
