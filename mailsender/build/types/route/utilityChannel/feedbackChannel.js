"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedbackChannel = void 0;
var FeedbackChannel;
(function (FeedbackChannel) {
    FeedbackChannel["FEEDBACK_GET"] = "/utility/feedback/get/:Id";
    FeedbackChannel["FEEDBACK_GET_ALL"] = "/utility/feedback/get-all/:UserId";
    FeedbackChannel["FEEDBACK_NEW"] = "/utility/feedback/new";
    FeedbackChannel["FEEDBACK_REMOVE"] = "/utility/feedback/remove/:Id";
    FeedbackChannel["FEEDBACK_UPDATE"] = "/utility/feedback/update/:Id";
    FeedbackChannel["FEEDBACK"] = "/utility/feedback";
    FeedbackChannel["FEEDBACK_ID"] = "/utility/feedback/:Id";
    FeedbackChannel["FEEDBACK_PARENT"] = "/utility/feedback/m?=:Id";
})(FeedbackChannel || (exports.FeedbackChannel = FeedbackChannel = {}));
//# sourceMappingURL=feedbackChannel.js.map