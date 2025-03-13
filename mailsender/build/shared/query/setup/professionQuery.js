"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfessionQuery = void 0;
var ProfessionQuery;
(function (ProfessionQuery) {
    ProfessionQuery["q001"] = "SELECT * FROM `profession`";
    ProfessionQuery["q002"] = "SELECT `Id` FROM `profession` WHERE `Id` = ?";
    ProfessionQuery["q003"] = "SELECT * FROM `profession` WHERE `UserId` = ?";
    ProfessionQuery["q004"] = "SELECT `Id` FROM `profession` WHERE `UserId` = ?";
    ProfessionQuery["q005"] = "SELECT `Id` FROM `profession` WHERE `Id` <> ? AND `UserId` = ?";
    ProfessionQuery["q006"] = "";
    ProfessionQuery["q007"] = "";
    ProfessionQuery["q008"] = "";
    ProfessionQuery["q009"] = "";
    ProfessionQuery["q010"] = "";
})(ProfessionQuery || (exports.ProfessionQuery = ProfessionQuery = {}));
//# sourceMappingURL=professionQuery.js.map