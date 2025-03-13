"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealQuery = void 0;
var MealQuery;
(function (MealQuery) {
    MealQuery["q001"] = "SELECT * FROM `meal` WHERE `CreatedBy` = ?";
    MealQuery["q002"] = "SELECT `Id` FROM `meal` WHERE `Id` = ?";
    MealQuery["q003"] = "SELECT * FROM `meal` WHERE `Id` = ?";
    MealQuery["q004"] = "SELECT `Id` FROM `meal` WHERE `Name` = ?";
    MealQuery["q005"] = "SELECT `Id` FROM `meal` WHERE `Id` <> ? AND`Name` = ?";
    MealQuery["q006"] = "";
    MealQuery["q007"] = "";
    MealQuery["q008"] = "";
    MealQuery["q009"] = "";
    MealQuery["q010"] = "";
})(MealQuery || (exports.MealQuery = MealQuery = {}));
//# sourceMappingURL=mealQuery.js.map