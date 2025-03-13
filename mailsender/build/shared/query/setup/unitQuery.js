"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnitQuery = void 0;
var UnitQuery;
(function (UnitQuery) {
    UnitQuery["q001"] = "SELECT * FROM `unit`";
    UnitQuery["q002"] = "SELECT `Id` FROM `unit` WHERE `Id` = ?";
    UnitQuery["q003"] = "SELECT * FROM `unit` WHERE `Id` = ?";
    UnitQuery["q004"] = "SELECT `Id` FROM `unit` WHERE `Name` = ?";
    UnitQuery["q005"] = "SELECT `Id` FROM `unit` WHERE `Id` <> ? AND `Name` = ?";
    UnitQuery["q006"] = "SELECT `Id` FROM `ingredient` WHERE `UnitId` = ?";
    UnitQuery["q007"] = "";
    UnitQuery["q008"] = "";
    UnitQuery["q009"] = "";
    UnitQuery["q010"] = "";
})(UnitQuery || (exports.UnitQuery = UnitQuery = {}));
//# sourceMappingURL=unitQuery.js.map