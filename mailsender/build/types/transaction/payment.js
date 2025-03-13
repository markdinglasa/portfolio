"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentInitial = exports.PaymentStatus = void 0;
const curreny_1 = require("../curreny");
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["DEFAULT"] = "";
    PaymentStatus["PAID"] = "paid";
    PaymentStatus["PENDING"] = "pending";
    PaymentStatus["INVALID"] = "invalid";
    PaymentStatus["EXPIRED"] = "expired";
})(PaymentStatus || (exports.PaymentStatus = PaymentStatus = {}));
exports.PaymentInitial = {
    TransactionDate: "",
    TransactionId: "",
    UserId: 0,
    SubscriptionId: 0,
    Curreny: curreny_1.Currency.PHP,
    Amount: 0,
    Method: "",
    Token: "",
    BillingAddress: null,
    Status: PaymentStatus.DEFAULT,
};
//# sourceMappingURL=payment.js.map