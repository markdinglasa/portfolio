"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationQuery = void 0;
var NotificationQuery;
(function (NotificationQuery) {
    NotificationQuery["q001"] = "SELECT * FROM `notification` WHERE `UserId` = ?";
    NotificationQuery["q002"] = "SELECT `Id` FROM `notification` WHERE `Id` = ?";
    NotificationQuery["q003"] = "SELECT * FROM `notification` WHERE `Id` = ?";
    NotificationQuery["q004"] = "SELECT `Id` FROM `user` WHERE `Id` = ?";
    NotificationQuery["q005"] = "";
    NotificationQuery["q006"] = "";
    NotificationQuery["q007"] = "";
    NotificationQuery["q008"] = "";
    NotificationQuery["q009"] = "";
    NotificationQuery["q010"] = "";
})(NotificationQuery || (exports.NotificationQuery = NotificationQuery = {}));
//# sourceMappingURL=notificationQuery.js.map