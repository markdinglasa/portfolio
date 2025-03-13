"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetupChannel = void 0;
const certificateChannel_1 = require("./certificateChannel");
const healthChannel_1 = require("./healthChannel");
const healthConditionChannel_1 = require("./healthConditionChannel");
const ingredientChannel_1 = require("./ingredientChannel");
const mealChannel_1 = require("./mealChannel");
const mealPlanChannel_1 = require("./mealPlanChannel");
const mealPlanLine_1 = require("./mealPlanLine");
const nutritionFactChannel_1 = require("./nutritionFactChannel");
const professionChannel_1 = require("./professionChannel");
const professionRatingChannel_1 = require("./professionRatingChannel");
const recipeChannel_1 = require("./recipeChannel");
const recipeLineChannel_1 = require("./recipeLineChannel");
const subscriptionChannel_1 = require("./subscriptionChannel");
const subscriptionLineChannel_1 = require("./subscriptionLineChannel");
const unitChannel_1 = require("./unitChannel");
const userChannel_1 = require("./userChannel");
const requestAccessChannel_1 = require("./requestAccessChannel");
exports.SetupChannel = {
    ...mealChannel_1.MealChannel,
    ...certificateChannel_1.CertificateChannel,
    ...healthChannel_1.HealthChannel,
    ...healthConditionChannel_1.HealthConditionChannel,
    ...ingredientChannel_1.IngredientChannel,
    ...mealPlanChannel_1.MealPlanChannel,
    ...mealPlanLine_1.MealPlanLineChannel,
    ...professionChannel_1.ProfessionChannel,
    ...professionRatingChannel_1.ProfessionRatingChannel,
    ...recipeLineChannel_1.RecipeLineChannel,
    ...nutritionFactChannel_1.NutritionFactChannel,
    ...recipeChannel_1.RecipeChannel,
    ...subscriptionChannel_1.SubscriptionChannel,
    ...subscriptionLineChannel_1.SubscriptionLineChannel,
    ...unitChannel_1.UnitChannel,
    ...userChannel_1.UserChannel,
    ...requestAccessChannel_1.RequestAccessChannel,
};
//# sourceMappingURL=index.js.map