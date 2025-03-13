"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const middleware_1 = require("../../middleware");
const types_1 = require("../../types");
const router = express_1.default.Router();
router.get(types_1.RouteChannel.NOTIFICATION_GET, middleware_1.TokenHandler.verifyToken);
router.get(types_1.RouteChannel.NOTIFICATION_GET_ALL, middleware_1.TokenHandler.verifyToken);
router.get(types_1.RouteChannel.NOTIFICATION_NEW, middleware_1.TokenHandler.verifyToken);
router.get(types_1.RouteChannel.NOTIFICATION_REMOVE, middleware_1.TokenHandler.verifyToken);
router.get(types_1.RouteChannel.NOTIFICATION_UPDATE, middleware_1.TokenHandler.verifyToken);
logging.log("----------------------------------------");
logging.log("----------NOTIFICATION CONTROLLER-----------");
logging.log(`POST ${types_1.RouteChannel.NOTIFICATION} [add]`);
logging.log(`GET ${types_1.RouteChannel.NOTIFICATION_PARENT} [get-all]`);
logging.log(`GET ${types_1.RouteChannel.NOTIFICATION_ID} [get]`);
logging.log(`DELETE ${types_1.RouteChannel.NOTIFICATION_ID} [remove]`);
logging.log(`UPDATE ${types_1.RouteChannel.NOTIFICATION_ID} [update]`);
logging.log("----------------------------------------");
exports.default = router;
//# sourceMappingURL=notificationRouter.js.map