"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NutritionFactQuery = void 0;
var NutritionFactQuery;
(function (NutritionFactQuery) {
    NutritionFactQuery["q001"] = "SELECT * FROM `nutrition_fact` WHERE `MealId` = ?";
    NutritionFactQuery["q002"] = "SELECT `Id` FROM `nutrition_fact` WHERE `Id` = ?";
    NutritionFactQuery["q003"] = "SELECT * FROM `nutrition_fact` WHERE `Id` = ?";
    NutritionFactQuery["q004"] = "SELECT `Id` FROM `nutriction_fact` WHERE `MealId` = ? AND `Name` = ?";
    NutritionFactQuery["q005"] = "SELECT `Id` FROM `nutriction_fact` WHERE Id <> ? AND `MealId` = ? AND `Name` = ?";
    NutritionFactQuery["q006"] = "";
    NutritionFactQuery["q007"] = "";
    NutritionFactQuery["q008"] = "";
    NutritionFactQuery["q009"] = "";
    NutritionFactQuery["q010"] = "";
})(NutritionFactQuery || (exports.NutritionFactQuery = NutritionFactQuery = {}));
//# sourceMappingURL=nutritionFactQuery.js.map