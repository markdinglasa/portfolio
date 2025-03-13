"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInital = exports.UserRole = exports.CivilStatus = void 0;
var CivilStatus;
(function (CivilStatus) {
    CivilStatus["DEFAULT"] = "";
    CivilStatus["SINGLE"] = "single";
    CivilStatus["MARRIED"] = "married";
    CivilStatus["DIVORCED"] = "divorced";
    CivilStatus["WIDOWED"] = "widowed";
    CivilStatus["SEPARETED"] = "legally-separated";
})(CivilStatus || (exports.CivilStatus = CivilStatus = {}));
var UserRole;
(function (UserRole) {
    UserRole["DEFAULT"] = "";
    UserRole["CLIENT"] = "client";
    UserRole["NUTRITIONIST"] = "nutritionist";
    UserRole["ADMINISTRATOR"] = "administrator";
    UserRole["SUPERUSER"] = "superuser";
})(UserRole || (exports.UserRole = UserRole = {}));
exports.UserInital = {
    Email: "",
    Password: "",
    Firstname: "",
    Middlename: null,
    Lastname: "",
    ContactNumber: "",
    Role: UserRole.DEFAULT,
    CivilStatus: CivilStatus.SINGLE,
    ProfilePhoto: null,
    IsSuspended: false,
    Genrder: "",
};
//# sourceMappingURL=user.js.map