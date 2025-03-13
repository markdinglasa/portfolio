export enum ProfessionRatingChannel {
  PROFESSION_RATING_GET = "/setup/profession-rating/get/:Id", // ProfessionId
  PROFESSION_RATING_GET_ALL = "/setup/profession-rating/get-all",
  PROFESSION_RATING_NEW = "/setup/profession-rating/new",
  PROFESSION_RATING_REMOVE = "/setup/profession-rating/remove/:Id",
  PROFESSION_RATING_UPDATE = "/setup/profession-rating/update/:Id",

  PROFESSION_RATING = "/setup/profession-rating",
  PROFESSION_RATING_ID = "/setup/profession-rating/:Id",
  PROFESSION_RATING_PARENT = "/setup/profession-rating/profession?=:Id",
}
