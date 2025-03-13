"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationChannel = void 0;
var NotificationChannel;
(function (NotificationChannel) {
    NotificationChannel["NOTIFICATION_GET"] = "/utility/notification/get/:Id";
    NotificationChannel["NOTIFICATION_GET_ALL"] = "/utility/notification/get-all/:UserId";
    NotificationChannel["NOTIFICATION_NEW"] = "/utility/notification/new";
    NotificationChannel["NOTIFICATION_REMOVE"] = "/utility/notification/remove/:Id";
    NotificationChannel["NOTIFICATION_UPDATE"] = "/utility/notification/update/:Id";
    NotificationChannel["NOTIFICATION"] = "/utility/notification";
    NotificationChannel["NOTIFICATION_ID"] = "/utility/notification/:Id";
    NotificationChannel["NOTIFICATION_PARENT"] = "/utility/notification/u?=:Id";
})(NotificationChannel || (exports.NotificationChannel = NotificationChannel = {}));
//# sourceMappingURL=notificationChannel.js.map