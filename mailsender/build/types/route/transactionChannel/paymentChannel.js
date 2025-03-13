"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentChannel = void 0;
var PaymentChannel;
(function (PaymentChannel) {
    PaymentChannel["PAYMENT_GET"] = "/transaction/appointment/get/:Id";
    PaymentChannel["PAYMENT_GET_ALL"] = "/transaction/appointment/get-all/:Id";
    PaymentChannel["PAYMENT_NEW"] = "/transaction/appointment/new";
    PaymentChannel["PAYMENT_REMOVE"] = "/transaction/appointment/remove/:Id";
    PaymentChannel["PAYMENT_UPDATE"] = "/transaction/appointment/update/:Id";
    PaymentChannel["PAYMENT"] = "/transaction/payment";
    PaymentChannel["PAYMENT_ID"] = "/transaction/payment/:Id";
    PaymentChannel["PAYMENT_USER"] = "/transaction/payment/u?=:Id";
})(PaymentChannel || (exports.PaymentChannel = PaymentChannel = {}));
//# sourceMappingURL=paymentChannel.js.map