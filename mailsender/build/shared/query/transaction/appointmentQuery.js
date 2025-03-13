"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentQuery = void 0;
var AppointmentQuery;
(function (AppointmentQuery) {
    AppointmentQuery["q001"] = "SELECT * FROM `appointment` WHERE `UserId` = ?";
    AppointmentQuery["q002"] = "SELECT `Id` FROM `appointment` WHERE `Id` = ?";
    AppointmentQuery["q003"] = "SELECT * FROM `appointment` WHERE `Id` = ?";
    AppointmentQuery["q004"] = "SELECT `Id` FROM `appointment` WHERE `Schedule` = ?";
    AppointmentQuery["q005"] = "SELECT `Id` FROM `appointment` WHERE `Id` <> ? AND `Schedule` = ?";
    AppointmentQuery["q006"] = "";
    AppointmentQuery["q007"] = "";
    AppointmentQuery["q008"] = "";
    AppointmentQuery["q009"] = "";
    AppointmentQuery["q010"] = "";
})(AppointmentQuery || (exports.AppointmentQuery = AppointmentQuery = {}));
//# sourceMappingURL=appointmentQuery.js.map