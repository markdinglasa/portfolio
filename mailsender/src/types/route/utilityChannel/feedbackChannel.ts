export enum FeedbackChannel {
  FEEDBACK_GET = "/utility/feedback/get/:Id",
  FEEDBACK_GET_ALL = "/utility/feedback/get-all/:UserId",
  FEEDBACK_NEW = "/utility/feedback/new",
  FEEDBACK_REMOVE = "/utility/feedback/remove/:Id",
  FEEDBACK_UPDATE = "/utility/feedback/update/:Id",

  FEEDBACK = "/utility/feedback",
  FEEDBACK_ID = "/utility/feedback/:Id",
  FEEDBACK_PARENT = "/utility/feedback/m?=:Id",
}
