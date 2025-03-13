"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserLogChannel = void 0;
var UserLogChannel;
(function (UserLogChannel) {
    UserLogChannel["USER_LOG_GET"] = "/utility/user-log/get/:Id";
    UserLogChannel["USER_LOG_GET_ALL"] = "/utility/user-log/get-all";
    UserLogChannel["USER_LOG_NEW"] = "/utility/user-log/new";
    UserLogChannel["USER_LOG_REMOVE"] = "/utility/user-log/remove/:Id";
    UserLogChannel["USER_LOG_UPDATE"] = "/utility/user-log/update/:Id";
    UserLogChannel["USER_LOG"] = "/utility/user-log";
    UserLogChannel["USER_LOG_ID"] = "/utility/user-log/:Id";
    UserLogChannel["USER_LOG_PARENT"] = "/utility/user-log/u?=:Id";
})(UserLogChannel || (exports.UserLogChannel = UserLogChannel = {}));
//# sourceMappingURL=userLogChannel.js.map