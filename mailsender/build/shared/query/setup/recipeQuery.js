"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeQuery = void 0;
var RecipeQuery;
(function (RecipeQuery) {
    RecipeQuery["q001"] = "SELECT * FROM `recipe`";
    RecipeQuery["q002"] = "SELECT `Id` FROM `recipe` WHERE `Id` = ?";
    RecipeQuery["q003"] = "SELECT * FROM `recipe` WHERE `Id` = ?";
    RecipeQuery["q004"] = "SEELCT `Id` FROM `recipe` WHERE `Name` = ?";
    RecipeQuery["q005"] = "SEELCT `Id` FROM `recipe` WHERE `Id` <> ? AND `Name` = ?";
    RecipeQuery["q006"] = "";
    RecipeQuery["q007"] = "";
    RecipeQuery["q008"] = "";
    RecipeQuery["q009"] = "";
    RecipeQuery["q010"] = "";
})(RecipeQuery || (exports.RecipeQuery = RecipeQuery = {}));
//# sourceMappingURL=recipeQuery.js.map