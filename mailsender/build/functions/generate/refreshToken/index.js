"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.refreshToken = void 0;
const shared_1 = require("../../../shared");
const config_1 = require("../../../config");
const jsonwebtoken_1 = require("jsonwebtoken");
const refreshToken = async (UserId = "") => {
    try {
        if (!UserId || typeof UserId !== "string")
            return { data: null, message: shared_1.Error.m012 };
        if (!config_1.SECRET_REFRESH_KEY)
            return { data: null, message: shared_1.Error.m013 };
        const token = (0, jsonwebtoken_1.sign)({ UserId }, config_1.SECRET_REFRESH_KEY, { expiresIn: "1d" });
        if (!token)
            return { data: null, message: shared_1.Error.m003 };
        return { data: token, message: shared_1.Success.m008 };
    }
    catch (error) {
        logging.log("----------------------------------------");
        logging.error("Generate-Fn [accessToken]:", error.message);
        logging.log("----------------------------------------");
        return { data: null, message: shared_1.Error.m001 };
    }
};
exports.refreshToken = refreshToken;
//# sourceMappingURL=index.js.map