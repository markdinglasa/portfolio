"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionQuery = void 0;
var SubscriptionQuery;
(function (SubscriptionQuery) {
    SubscriptionQuery["q001"] = "SELECT * FROM `subscription`";
    SubscriptionQuery["q002"] = "SELECT `Id` FROM `subscription` WHERE `Id` = ?";
    SubscriptionQuery["q003"] = "SELECT * FROM `subscription` WHERE `Id` = ?";
    SubscriptionQuery["q004"] = "SELECT `Id` FROM `subscription` WHERE `Name` = ?";
    SubscriptionQuery["q005"] = "SELECT `Id` FROM `subscription` WHERE `Id` <> ? AND`Name` = ?";
    SubscriptionQuery["q006"] = "SELECT `Id` FROM `subscription_line` WHERE `SubscriptionId` = ?";
    SubscriptionQuery["q007"] = "";
    SubscriptionQuery["q008"] = "";
    SubscriptionQuery["q009"] = "";
    SubscriptionQuery["q010"] = "";
})(SubscriptionQuery || (exports.SubscriptionQuery = SubscriptionQuery = {}));
//# sourceMappingURL=subscriptionQuery.js.map