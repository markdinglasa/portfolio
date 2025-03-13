"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReminderChannel = void 0;
var ReminderChannel;
(function (ReminderChannel) {
    ReminderChannel["REMINDER_GET"] = "/utility/reminder/get/:Id";
    ReminderChannel["REMINDER_GET_ALL"] = "/utility/reminder/get-all/:UserId";
    ReminderChannel["REMINDER_NEW"] = "/utility/reminder/new";
    ReminderChannel["REMINDER_REMOVE"] = "/utility/reminder/remove/:Id";
    ReminderChannel["REMINDER_UPDATE"] = "/utility/reminder/update/:Id";
    ReminderChannel["REMINDER"] = "/utility/reminder";
    ReminderChannel["REMINDER_ID"] = "/utility/reminder/:Id";
    ReminderChannel["REMINDER_PARENT"] = "/utility/reminder/u?=:Id";
})(ReminderChannel || (exports.ReminderChannel = ReminderChannel = {}));
//# sourceMappingURL=reminderChannel.js.map