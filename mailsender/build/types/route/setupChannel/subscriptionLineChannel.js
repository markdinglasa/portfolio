"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionLineChannel = void 0;
var SubscriptionLineChannel;
(function (SubscriptionLineChannel) {
    SubscriptionLineChannel["SUBSCRIPTION_LINE_GET"] = "/setup/subscription/get/:Id";
    SubscriptionLineChannel["SUBSCRIPTION_LINE_GET_ALL"] = "/setup/subscription/get-all/:Id";
    SubscriptionLineChannel["SUBSCRIPTION_LINE_NEW"] = "/setup/subscription/new";
    SubscriptionLineChannel["SUBSCRIPTION_LINE_REMOVE"] = "/setup/subscription/remove/:Id";
    SubscriptionLineChannel["SUBSCRIPTION_LINE_UPDATE"] = "/setup/subscription/update/:Id";
    SubscriptionLineChannel["SUBSCRIPTION_LINE"] = "/setup/subscription-line";
    SubscriptionLineChannel["SUBSCRIPTION_LINE_ID"] = "/setup/subscription-line/:Id";
    SubscriptionLineChannel["SUBSCRIPTION_LINE_PARENT"] = "/setup/subscription-line/subscription?=:Id";
})(SubscriptionLineChannel || (exports.SubscriptionLineChannel = SubscriptionLineChannel = {}));
//# sourceMappingURL=subscriptionLineChannel.js.map