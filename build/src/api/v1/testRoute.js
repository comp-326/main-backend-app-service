"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function default_1(req, res, next) {
    const html = '<p style=\'text-align:center;font-family:Helvetica,Arial,sans-serif; padding:40px;\'>Application test is working</p>';
    return res.status(200).send(html);
}
exports.default = default_1;

//# sourceMappingURL=testRoute.js.map
