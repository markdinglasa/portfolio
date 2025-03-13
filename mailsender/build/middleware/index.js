"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.route500 = exports.route204 = exports.route404 = exports.loggingHandler = exports.corsHandler = exports.TokenHandler = void 0;
const tokenHandler_1 = __importDefault(require("./tokenHandler"));
exports.TokenHandler = tokenHandler_1.default;
const route404_1 = require("./route404");
Object.defineProperty(exports, "route404", { enumerable: true, get: function () { return route404_1.route404; } });
Object.defineProperty(exports, "route204", { enumerable: true, get: function () { return route404_1.route204; } });
Object.defineProperty(exports, "route500", { enumerable: true, get: function () { return route404_1.route500; } });
const corsHandler_1 = require("./corsHandler");
Object.defineProperty(exports, "corsHandler", { enumerable: true, get: function () { return corsHandler_1.corsHandler; } });
const loggingHandler_1 = require("./loggingHandler");
Object.defineProperty(exports, "loggingHandler", { enumerable: true, get: function () { return loggingHandler_1.loggingHandler; } });
//# sourceMappingURL=index.js.map