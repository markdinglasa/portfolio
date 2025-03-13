"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionChannel = void 0;
const appointmentChannel_1 = require("./appointmentChannel");
const mealPlanRequestChannel_1 = require("./mealPlanRequestChannel");
const paymentChannel_1 = require("./paymentChannel");
exports.TransactionChannel = {
    ...appointmentChannel_1.AppointmentChannel,
    ...mealPlanRequestChannel_1.MealPlanRequestChannel,
    ...paymentChannel_1.PaymentChannel,
};
//# sourceMappingURL=index.js.map