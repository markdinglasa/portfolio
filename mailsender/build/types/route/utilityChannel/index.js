"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilityChannel = void 0;
const feedbackChannel_1 = require("./feedbackChannel");
const notificationChannel_1 = require("./notificationChannel");
const reminderChannel_1 = require("./reminderChannel");
const userLogChannel_1 = require("./userLogChannel");
const uploadChannel_1 = require("./uploadChannel");
exports.UtilityChannel = {
    ...feedbackChannel_1.FeedbackChannel,
    ...notificationChannel_1.NotificationChannel,
    ...reminderChannel_1.ReminderChannel,
    ...userLogChannel_1.UserLogChannel,
    ...uploadChannel_1.UploadChannel,
};
//# sourceMappingURL=index.js.map