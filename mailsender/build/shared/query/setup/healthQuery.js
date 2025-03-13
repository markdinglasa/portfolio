"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthQuery = void 0;
var HealthQuery;
(function (HealthQuery) {
    HealthQuery["q001"] = "SELECT * FROM `health` WHERE `UserId` = ?";
    HealthQuery["q002"] = "SELECT `Id` FROM `health` WHERE `Id` = ?";
    HealthQuery["q003"] = "SELECT * FROM `health` WHERE `Id` = ? ";
    HealthQuery["q004"] = "SELECT `Id` FROM `health` WHERE `UserId` = ?";
    HealthQuery["q005"] = "";
    HealthQuery["q006"] = "";
    HealthQuery["q007"] = "";
    HealthQuery["q008"] = "";
    HealthQuery["q009"] = "";
    HealthQuery["q010"] = "";
})(HealthQuery || (exports.HealthQuery = HealthQuery = {}));
//# sourceMappingURL=healthQuery.js.map