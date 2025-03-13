"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const messages_1 = require("../shared/messages");
const config_1 = require("../config");
const axios_1 = __importDefault(require("axios"));
class TokenHandler {
}
_a = TokenHandler;
TokenHandler.verifyToken = async (req, res, next) => {
    const authorizationHeader = req.headers["authorization"];
    const refreshToken = req.headers["refresh-token"];
    if (!authorizationHeader || !authorizationHeader.startsWith("Bearer "))
        return res.status(403).json({ data: false, message: messages_1.Error.m004 });
    const accessToken = authorizationHeader.split(" ")[1];
    if (req.headers["x-auth-provider"])
        return _a.verifyGoogleToken(req, res, next);
    else {
        jsonwebtoken_1.default.verify(accessToken, config_1.SECRET_KEY, (error, User) => {
            if (error) {
                if (error.name === "TokenExpiredError")
                    return _a.refresh(req, res, next);
                return res.status(403).json({ data: false, message: messages_1.Error.m004 });
            }
            req.User = User;
            req.AccessToken = accessToken;
            req.RefreshToken = refreshToken;
            next();
        });
    }
};
TokenHandler.verifyGoogleToken = async (req, res, next) => {
    const accessToken = req.headers["authorization"]?.split(" ")[1];
    const refreshToken = req.headers["refresh-token"];
    if (!accessToken)
        return res.status(403).json({ error: "Access token is missing" });
    try {
        const response = await axios_1.default.get(`https://oauth2.googleapis.com/tokeninfo?access_token=${accessToken}`);
        const tokenInfo = response.data;
        if (tokenInfo.aud !== process.env.GOOGLE_CLIENT_ID)
            return res.status(403).json({ data: false, message: messages_1.Error.m026 });
        const currentTime = Math.floor(Date.now() / 1000);
        if (parseInt(tokenInfo.exp, 10) < currentTime)
            return res.status(403).json({ data: false, message: messages_1.Error.m025 });
        req.User = tokenInfo;
        req.AccessToken = accessToken;
        req.RefreshToken = refreshToken;
        next();
    }
    catch (error) {
        return res.status(403).json({ data: false, message: messages_1.Error.m004 });
    }
};
// Refresh Access Token using the Refresh Token
TokenHandler.refresh = async (req, res, next) => {
    const refreshToken = req.headers["refresh-token"];
    if (!refreshToken)
        return res.status(403).json({ data: false, message: messages_1.Error.m023 });
    jsonwebtoken_1.default.verify(refreshToken, config_1.SECRET_KEY, (error, User) => {
        if (error) {
            return res.status(403).json({ data: false, message: messages_1.Error.m004 });
        }
        const newAccessToken = jsonwebtoken_1.default.sign({ User: User }, config_1.SECRET_KEY, {
            expiresIn: "1d",
        });
        res.setHeader("Authorization", `Bearer ${newAccessToken}`);
        return res.status(200).json({
            success: true,
            accessToken: newAccessToken,
        });
    });
};
exports.default = TokenHandler;
//# sourceMappingURL=tokenHandler.js.map