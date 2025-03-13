"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealPlanLineChannel = void 0;
var MealPlanLineChannel;
(function (MealPlanLineChannel) {
    MealPlanLineChannel["MEAL_PLAN_LINE_GET"] = "/setup/meal-plan/get/:Id";
    MealPlanLineChannel["MEAL_PLAN_LINE_GET_ALL"] = "/setup/meal-plan/get-all/:Id";
    MealPlanLineChannel["MEAL_PLAN_LINE_NEW"] = "/setup/meal-plan/new";
    MealPlanLineChannel["MEAL_PLAN_LINE_REMOVE"] = "/setup/meal-plan/remove/:Id";
    MealPlanLineChannel["MEAL_PLAN_LINE_UPDATE"] = "/setup/meal-plan/update/:Id";
    MealPlanLineChannel["MEAL_PLAN_LINE"] = "/setup/meal-plan-line";
    MealPlanLineChannel["MEAL_PLAN_LINE_ID"] = "/setup/meal-plan-line/:Id";
    MealPlanLineChannel["MEAL_PLAN_LINE_PARENT"] = "/setup/meal-plan-line/meal-plan?=:Id";
})(MealPlanLineChannel || (exports.MealPlanLineChannel = MealPlanLineChannel = {}));
//# sourceMappingURL=mealPlanLine.js.map