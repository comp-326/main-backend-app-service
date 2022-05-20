"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (text) => {
    if (text.charCodeAt(0) > 64 && text.charCodeAt(0) < 97)
        return text;
    return text.charAt(0).toLocaleUpperCase() + text.slice(1);
};

//# sourceMappingURL=capitalize.js.map
