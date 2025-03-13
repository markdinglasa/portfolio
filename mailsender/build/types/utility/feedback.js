"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedbackInitial = exports.FeedbackType = void 0;
var FeedbackType;
(function (FeedbackType) {
    FeedbackType["DEFAULT"] = "";
    FeedbackType["EXPERT"] = "expert";
    FeedbackType["MEAL"] = "meal";
})(FeedbackType || (exports.FeedbackType = FeedbackType = {}));
exports.FeedbackInitial = {
    UserId: 0,
    Type: FeedbackType.DEFAULT,
    MealPlanId: null,
    Comments: null,
    Rating: 0,
};
//# sourceMappingURL=feedback.js.map