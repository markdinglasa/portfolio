"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealPlanQuery = void 0;
var MealPlanQuery;
(function (MealPlanQuery) {
    MealPlanQuery["q001"] = "SELECT * FROM `meal_plan` WHERE `UserId` = ?";
    MealPlanQuery["q002"] = "SELECT `Id` FROM `meal_plan` WHERE `Id` = ?";
    MealPlanQuery["q003"] = "SELECT * FROM `meal_plan` WHERE `Id` = ?";
    MealPlanQuery["q004"] = "SELECT `Id` FROM `meal_plan` WHERE `UserId` = ?";
    MealPlanQuery["q005"] = "SELECT `Id` FROM `meal_plan` WHERE `Id` <> ? AND `UserId` = ?";
    MealPlanQuery["q006"] = "";
    MealPlanQuery["q007"] = "";
    MealPlanQuery["q008"] = "";
    MealPlanQuery["q009"] = "";
    MealPlanQuery["q010"] = "";
})(MealPlanQuery || (exports.MealPlanQuery = MealPlanQuery = {}));
//# sourceMappingURL=mealPlanQuery.js.map