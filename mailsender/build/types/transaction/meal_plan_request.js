"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealPlanRequestInitial = void 0;
const appointment_1 = require("./appointment");
exports.MealPlanRequestInitial = {
    UserId: 0,
    NutritionistId: 0,
    Duration: 0,
    Remarks: null,
    Status: appointment_1.AppoinmentStatus.DEFAULT,
    IsCustom: false,
    MealPlanRecipe: null,
};
//# sourceMappingURL=meal_plan_request.js.map