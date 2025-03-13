"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_EMAIL_PASSWORD = exports.DEFAULT_EMAIL = exports.GOOGLE_CLIENT_SECRET = exports.GOOGLE_CLIENT_ID = exports.SESSION_SECRET = exports.TOKEN_EXPIRATION = exports.SECRET_REFRESH_KEY = exports.SECRET_KEY = exports.server = exports.SERVER_PORT = exports.SERVER_HOSTNAME = exports.SERVER_PASSWORD = exports.DB_NAME = exports.DB_PORT = exports.DB_URL = exports.DB_HOST = exports.DB_PASSWORD = exports.DB_USER = exports.TEST = exports.NODE_ENV = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const crypto_1 = require("crypto");
dotenv_1.default.config();
exports.NODE_ENV = process.env.NODE_ENV;
exports.TEST = process.env.NODE_ENV === "test";
exports.DB_USER = process.env.DB_USER || "";
exports.DB_PASSWORD = process.env.DB_PASSWORD || "";
exports.DB_HOST = process.env.DB_HOST || "";
exports.DB_URL = process.env.DB_URL || "";
exports.DB_PORT = process.env.DB_PORT || 3306;
exports.DB_NAME = process.env.DB_NAME || "";
exports.SERVER_PASSWORD = process.env.SERVER_PASSWORD;
exports.SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || "localhost";
exports.SERVER_PORT = process.env.SERVER_PORT
    ? Number(process.env.SERVER_PORT)
    : 3500;
exports.server = {
    SERVER_HOSTNAME: exports.SERVER_HOSTNAME,
    SERVER_PORT: exports.SERVER_PORT,
};
exports.SECRET_KEY = process.env.SECRET_KEY || (0, crypto_1.randomBytes)(32).toString("hex");
exports.SECRET_REFRESH_KEY = process.env.SECRET_REFRESH_KEY || (0, crypto_1.randomBytes)(32).toString("hex");
exports.TOKEN_EXPIRATION = "30d";
exports.SESSION_SECRET = process.env.SESSION_SECRET || "myk-sx2";
// GOOGLE API
exports.GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || "";
exports.GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || "";
// EMAIL
exports.DEFAULT_EMAIL = process.env.DEFAULT_EMAIL || "";
exports.DEFAULT_EMAIL_PASSWORD = process.env.DEFAULT_EMAIL_PASSWORD || "";
//# sourceMappingURL=config.js.map