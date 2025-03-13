"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeChannel = void 0;
var RecipeChannel;
(function (RecipeChannel) {
    RecipeChannel["RECIPE_GET"] = "/setup/recipe/get/:Id";
    RecipeChannel["RECIPE_GET_ALL"] = "/setup/recipe/get-all";
    RecipeChannel["RECIPE_NEW"] = "/setup/recipe/new";
    RecipeChannel["RECIPE_REMOVE"] = "/setup/recipe/remove/:Id";
    RecipeChannel["RECIPE_UPDATE"] = "/setup/recipe/update/:Id";
    RecipeChannel["RECIPE"] = "/setup/recipe";
    RecipeChannel["RECIPE_ID"] = "/setup/recipe/:Id";
    RecipeChannel["RECIPE_PARENT"] = "/setup/recipe/u?=:Id";
})(RecipeChannel || (exports.RecipeChannel = RecipeChannel = {}));
//# sourceMappingURL=recipeChannel.js.map