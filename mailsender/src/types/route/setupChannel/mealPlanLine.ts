export enum MealPlanLineChannel {
  MEAL_PLAN_LINE_GET = "/setup/meal-plan/get/:Id",
  MEAL_PLAN_LINE_GET_ALL = "/setup/meal-plan/get-all/:Id", // MealPlanId
  MEAL_PLAN_LINE_NEW = "/setup/meal-plan/new",
  MEAL_PLAN_LINE_REMOVE = "/setup/meal-plan/remove/:Id",
  MEAL_PLAN_LINE_UPDATE = "/setup/meal-plan/update/:Id",

  MEAL_PLAN_LINE = "/setup/meal-plan-line",
  MEAL_PLAN_LINE_ID = "/setup/meal-plan-line/:Id",
  MEAL_PLAN_LINE_PARENT = "/setup/meal-plan-line/meal-plan?=:Id",
}
