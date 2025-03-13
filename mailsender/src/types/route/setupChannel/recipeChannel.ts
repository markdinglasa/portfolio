export enum RecipeChannel {
  RECIPE_GET = "/setup/recipe/get/:Id",
  RECIPE_GET_ALL = "/setup/recipe/get-all",
  RECIPE_NEW = "/setup/recipe/new",
  RECIPE_REMOVE = "/setup/recipe/remove/:Id",
  RECIPE_UPDATE = "/setup/recipe/update/:Id",

  RECIPE = "/setup/recipe",
  RECIPE_ID = "/setup/recipe/:Id",
  RECIPE_PARENT = "/setup/recipe/u?=:Id",
}
