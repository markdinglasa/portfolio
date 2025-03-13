"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const accessToken_1 = require("./accessToken");
const refreshToken_1 = require("./refreshToken");
const randomPassword_1 = require("./randomPassword");
class GenerateFn {
    constructor() {
        this.accessToken = accessToken_1.accessToken;
        this.refreshToken = refreshToken_1.refreshToken;
        this.randomPassword = randomPassword_1.randomPassword;
    }
}
exports.default = new GenerateFn();
//# sourceMappingURL=index.js.map