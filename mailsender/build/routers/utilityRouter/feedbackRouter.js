"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const middleware_1 = require("../../middleware");
const types_1 = require("../../types");
const constants_1 = require("../../constants");
const controllers_1 = require("../../controllers");
const router = express_1.default.Router();
router.get(`${constants_1.API_VERSION}${types_1.RouteChannel.FEEDBACK_GET}`, middleware_1.TokenHandler.verifyToken, controllers_1.FeedbackGetController);
router.get(`${constants_1.API_VERSION}${types_1.RouteChannel.FEEDBACK_GET_ALL}`, middleware_1.TokenHandler.verifyToken, controllers_1.FeedbackGetAllController);
router.get(`${constants_1.API_VERSION}${types_1.RouteChannel.FEEDBACK_NEW}`, middleware_1.TokenHandler.verifyToken, controllers_1.FeedbackAddController);
router.get(`${constants_1.API_VERSION}${types_1.RouteChannel.FEEDBACK_REMOVE}`, middleware_1.TokenHandler.verifyToken, controllers_1.FeedbackRemoveController);
router.get(`${constants_1.API_VERSION}${types_1.RouteChannel.FEEDBACK_UPDATE}`, middleware_1.TokenHandler.verifyToken, controllers_1.FeedbackUpdateController);
logging.log("----------------------------------------");
logging.log("----------FEEDBACK CONTROLLER-----------");
logging.log(`POST ${types_1.RouteChannel.FEEDBACK} [add]`);
logging.log(`GET ${types_1.RouteChannel.FEEDBACK_PARENT} [get-all]`);
logging.log(`GET ${types_1.RouteChannel.FEEDBACK_ID} [get]`);
logging.log(`DELETE ${types_1.RouteChannel.FEEDBACK_ID} [remove]`);
logging.log(`UPDATE ${types_1.RouteChannel.FEEDBACK_ID} [update]`);
logging.log("----------------------------------------");
exports.default = router;
//# sourceMappingURL=feedbackRouter.js.map