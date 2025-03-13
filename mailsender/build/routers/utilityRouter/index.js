"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const feedbackRouter_1 = __importDefault(require("./feedbackRouter"));
const notificationRouter_1 = __importDefault(require("./notificationRouter"));
const reminderRouter_1 = __importDefault(require("./reminderRouter"));
const uploadImage_1 = __importDefault(require("./uploadImage"));
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.use(feedbackRouter_1.default);
router.use(notificationRouter_1.default);
router.use(reminderRouter_1.default);
router.use(uploadImage_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map