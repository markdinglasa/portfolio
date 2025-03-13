"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IngredientQuery = void 0;
var IngredientQuery;
(function (IngredientQuery) {
    IngredientQuery["q001"] = "SELECT i.*, u.`Name` AS `UnitName` FROM `ingredient` AS i LEFT JOIN unit AS u ON u.`Id`=i.`UnitId`";
    IngredientQuery["q002"] = "SELECT `Id` FROM `ingredient` WHERE `Id` = ?";
    IngredientQuery["q003"] = "SELECT * FROM `ingredient` WHERE `Id` = ?";
    IngredientQuery["q004"] = "SELECT `IngredientId` FROM `recipe` WHERE `IngredientId` = ?";
    IngredientQuery["q005"] = "SELECT `Id` FROM `ingredient` WHERE `Id` <> ? AND `Name` = ?";
    IngredientQuery["q006"] = "";
    IngredientQuery["q007"] = "";
    IngredientQuery["q008"] = "";
    IngredientQuery["q009"] = "";
    IngredientQuery["q010"] = "";
})(IngredientQuery || (exports.IngredientQuery = IngredientQuery = {}));
//# sourceMappingURL=ingredientQuery.js.map