"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthConditionQuery = void 0;
var HealthConditionQuery;
(function (HealthConditionQuery) {
    HealthConditionQuery["q001"] = "SELECT * FROM `health_condition` WHERE `HealthId` = ?";
    HealthConditionQuery["q002"] = "SELECT `Id` FROM `health_condition` WHERE `Id` = ?";
    HealthConditionQuery["q003"] = "SELECT * FROM `health_condition` WHERE `Id` = ?";
    HealthConditionQuery["q004"] = "SELECT `Id` FROM `health_condition` WHERE `HealthId` = ? AND `Description` = ?";
    HealthConditionQuery["q005"] = "";
    HealthConditionQuery["q006"] = "";
    HealthConditionQuery["q007"] = "";
    HealthConditionQuery["q008"] = "";
    HealthConditionQuery["q009"] = "";
    HealthConditionQuery["q010"] = "";
})(HealthConditionQuery || (exports.HealthConditionQuery = HealthConditionQuery = {}));
//# sourceMappingURL=healthConditionQuery.js.map