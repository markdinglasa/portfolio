export enum IngredientQuery {
  q001 = "SELECT i.*, u.`Name` AS `UnitName` FROM `ingredient` AS i LEFT JOIN unit AS u ON u.`Id`=i.`UnitId`", // GET ALL
  q002 = "SELECT `Id` FROM `ingredient` WHERE `Id` = ?", // CHECK EXISTENCE
  q003 = "SELECT * FROM `ingredient` WHERE `Id` = ?", // GET
  q004 = "SELECT `IngredientId` FROM `recipe` WHERE `IngredientId` = ?", // CHECK TRANSACTION
  q005 = "SELECT `Id` FROM `ingredient` WHERE `Id` <> ? AND `Name` = ?", // CHECK NAME DUPLICATEION ON UPDATE
  q006 = "",
  q007 = "",
  q008 = "",
  q009 = "",
  q010 = "",
}
