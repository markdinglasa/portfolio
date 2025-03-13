"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeLineChannel = void 0;
var RecipeLineChannel;
(function (RecipeLineChannel) {
    RecipeLineChannel["RECIPE_LINE_GET"] = "/setup/recipe-line/get/:Id";
    RecipeLineChannel["RECIPE_LINE_GET_ALL"] = "/setup/recipe-line/get-all";
    RecipeLineChannel["RECIPE_LINE_NEW"] = "/setup/recipe-line/new";
    RecipeLineChannel["RECIPE_LINE_REMOVE"] = "/setup/recipe-line/remove/:Id";
    RecipeLineChannel["RECIPE_LINE_UPDATE"] = "/setup/recipe-line/update/:Id";
    RecipeLineChannel["RECIPE_LINE"] = "/setup/recipe-line";
    RecipeLineChannel["RECIPE_LINE_ID"] = "/setup/recipe-line/:Id";
    RecipeLineChannel["RECIPE_LINE_PARENT"] = "/setup/recipe-line/recipe?=:Id";
})(RecipeLineChannel || (exports.RecipeLineChannel = RecipeLineChannel = {}));
//# sourceMappingURL=recipeLineChannel.js.map