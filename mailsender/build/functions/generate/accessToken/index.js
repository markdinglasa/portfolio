"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.accessToken = void 0;
const shared_1 = require("../../../shared");
const config_1 = require("../../../config");
const jsonwebtoken_1 = require("jsonwebtoken");
const accessToken = async (Id = "") => {
    try {
        if (!Id || typeof Id !== "string")
            return { data: null, message: shared_1.Error.m012 };
        if (!config_1.SECRET_KEY)
            return { data: null, message: shared_1.Error.m013 };
        const token = (0, jsonwebtoken_1.sign)({ Id }, config_1.SECRET_KEY, {
            expiresIn: config_1.TOKEN_EXPIRATION,
        });
        if (!token)
            return { data: null, message: shared_1.Error.m003 };
        return { data: token, message: shared_1.Success.m007 };
    }
    catch (error) {
        logging.log("----------------------------------------");
        logging.error("Generate-Fn [accessToken]:", error.message);
        logging.log("----------------------------------------");
        return { data: null, message: shared_1.Error.m001 };
    }
};
exports.accessToken = accessToken;
//# sourceMappingURL=index.js.map