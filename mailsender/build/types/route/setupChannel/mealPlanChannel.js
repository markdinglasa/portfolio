"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealPlanChannel = void 0;
var MealPlanChannel;
(function (MealPlanChannel) {
    MealPlanChannel["MEAL_PLAN_GET"] = "/setup/meal-plan/get/:Id";
    MealPlanChannel["MEAL_PLAN_GET_ALL"] = "/setup/meal-plan/get-all/:Id";
    MealPlanChannel["MEAL_PLAN_NEW"] = "/setup/meal-plan/new";
    MealPlanChannel["MEAL_PLAN_REMOVE"] = "/setup/meal-plan/remove/:Id";
    MealPlanChannel["MEAL_PLAN_UPDATE"] = "/setup/meal-plan/update/:Id";
    MealPlanChannel["MEAL_PLAN"] = "/setup/meal-plan";
    MealPlanChannel["MEAL_PLAN_ID"] = "/setup/meal-plan/:Id";
    MealPlanChannel["MEAL_PLAN_PARENT"] = "/setup/meal-plan/user?=:Id";
})(MealPlanChannel || (exports.MealPlanChannel = MealPlanChannel = {}));
//# sourceMappingURL=mealPlanChannel.js.map