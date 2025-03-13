"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserQuery = void 0;
var UserQuery;
(function (UserQuery) {
    UserQuery["q001"] = "SELECT *, CONCAT(Firstname, ' ', IFNULL(NULLIF(Middlename, ''), ''), ' ', Lastname) AS `Fullname` FROM user WHERE `Id` <> 1";
    UserQuery["q002"] = "SELECT *, CONCAT(Firstname, ' ', IFNULL(NULLIF(Middlename, ''), ''), ' ', Lastname) AS `Fullname` FROM `user` WHERE `Id` =?";
    UserQuery["q003"] = "SELECT `Id` FROM user WHERE Email = ?";
    UserQuery["q004"] = "SELECT `UserId` FROM `user_log` WHERE `UserId` = ?";
    UserQuery["q006"] = "SELECT `Id` FROM `user` WHERE `Id` = ?";
    UserQuery["q007"] = "";
    UserQuery["q008"] = "";
})(UserQuery || (exports.UserQuery = UserQuery = {}));
//# sourceMappingURL=userQuery.js.map