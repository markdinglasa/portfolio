"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealPlanRequestChannel = void 0;
var MealPlanRequestChannel;
(function (MealPlanRequestChannel) {
    MealPlanRequestChannel["MEAL_PLAN_REQUEST_GET"] = "/transaction/meal-plan-request/get/:Id";
    MealPlanRequestChannel["MEAL_PLAN_REQUEST_GET_ALL"] = "/transaction/meal-plan-request/get-all/:Id";
    MealPlanRequestChannel["MEAL_PLAN_REQUEST_NEW"] = "/transaction/appointment/new";
    MealPlanRequestChannel["MEAL_PLAN_REQUEST_REMOVE"] = "/transaction/appointment/remove/:Id";
    MealPlanRequestChannel["MEAL_PLAN_REQUEST_UPDATE"] = "/transaction/appointment/update/:Id";
    MealPlanRequestChannel["MEAL_PLAN_REQUEST"] = "/transactoin/meal-plan-request";
    MealPlanRequestChannel["MEAL_PLAN_REQUEST_ID"] = "/transactoin/meal-plan-request/:Id";
    MealPlanRequestChannel["MEAL_PLAN_REQUEST_PARENT"] = "/transactoin/meal-plan-request/u?=:Id";
})(MealPlanRequestChannel || (exports.MealPlanRequestChannel = MealPlanRequestChannel = {}));
//# sourceMappingURL=mealPlanRequestChannel.js.map