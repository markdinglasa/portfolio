"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const middleware_1 = require("../../middleware");
const types_1 = require("../../types");
const router = express_1.default.Router();
router.get(types_1.RouteChannel.REMINDER_GET, middleware_1.TokenHandler.verifyToken);
router.get(types_1.RouteChannel.REMINDER_GET_ALL, middleware_1.TokenHandler.verifyToken);
router.get(types_1.RouteChannel.REMINDER_NEW, middleware_1.TokenHandler.verifyToken);
router.get(types_1.RouteChannel.REMINDER_REMOVE, middleware_1.TokenHandler.verifyToken);
router.get(types_1.RouteChannel.REMINDER_UPDATE, middleware_1.TokenHandler.verifyToken);
logging.log("----------------------------------------");
logging.log(`POST ${types_1.RouteChannel.REMINDER} [add]`);
logging.log(`GET ${types_1.RouteChannel.REMINDER_PARENT} [get-all]`);
logging.log(`GET ${types_1.RouteChannel.REMINDER_ID} [get]`);
logging.log(`DELETE ${types_1.RouteChannel.REMINDER_ID} [remove]`);
logging.log(`UPDATE ${types_1.RouteChannel.REMINDER_ID} [update]`);
logging.log("----------------------------------------");
exports.default = router;
//# sourceMappingURL=reminderRouter.js.map