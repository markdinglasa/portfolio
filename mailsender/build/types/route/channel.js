"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Channels = void 0;
var Channels;
(function (Channels) {
    Channels["AUTH"] = "/auth";
    Channels["SETUP"] = "/setup";
    Channels["TRANSACTION"] = "/transaction";
    Channels["UTILITY"] = "/utility";
    Channels["SETTINGS"] = "/settings";
    Channels["REPORT"] = "/report";
    Channels["LOCK"] = "/lock/:Id";
    Channels["CANCEL"] = "/cancel/:Id";
    Channels["LOGIN"] = "/login";
    Channels["LOGOUT"] = "/logout";
    Channels["REFRESH"] = "/refresh";
    Channels["GET_RECORD"] = "/get/:Id";
    Channels["GET_BY_NAME_RECORD"] = "/get-by-name/:Name";
    Channels["GET_ALL_RECORD"] = "/get-all";
    Channels["GET_ALL_RECORD_WITH_ID"] = "/get-all/:Id";
    Channels["REMOVE_RECORD"] = "/remove/:Id";
    Channels["UPDATE_RECORD"] = "/update/:Id";
    Channels["ADD_RECORD"] = "/add";
})(Channels || (exports.Channels = Channels = {}));
//# sourceMappingURL=channel.js.map