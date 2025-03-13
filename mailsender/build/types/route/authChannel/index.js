"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthChannel = void 0;
const googleChannel_1 = require("./googleChannel");
const jwtChannel_1 = require("./jwtChannel");
exports.AuthChannel = {
    ...googleChannel_1.GoogleChannel,
    ...jwtChannel_1.JWTChannel,
};
//# sourceMappingURL=index.js.map