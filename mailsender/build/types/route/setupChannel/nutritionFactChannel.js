"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NutritionFactChannel = void 0;
var NutritionFactChannel;
(function (NutritionFactChannel) {
    NutritionFactChannel["NUTRITION_FACT_GET"] = "/setup/nutrition-fact/get/:Id";
    NutritionFactChannel["NUTRITION_FACT_GET_ALL"] = "/setup/nutrition-fact/get-all/:Id";
    NutritionFactChannel["NUTRITION_FACT_NEW"] = "/setup/nutrition-fact/new";
    NutritionFactChannel["NUTRITION_FACT_REMOVE"] = "/setup/nutrition-fact/remove/:Id";
    NutritionFactChannel["NUTRITION_FACT_UPDATE"] = "/setup/nutrition-fact/update/:Id";
    NutritionFactChannel["NUTRITION_FACT"] = "/setup/nutrition-fact";
    NutritionFactChannel["NUTRITION_FACT_ID"] = "/setup/nutrition-fact/:Id";
    NutritionFactChannel["NUTRITION_FACT_PARENT"] = "/setup/nutrition-fact/meal?=:Id";
})(NutritionFactChannel || (exports.NutritionFactChannel = NutritionFactChannel = {}));
//# sourceMappingURL=nutritionFactChannel.js.map