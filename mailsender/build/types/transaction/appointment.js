"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppoinmentInitial = exports.AppoinmentStatus = void 0;
var AppoinmentStatus;
(function (AppoinmentStatus) {
    AppoinmentStatus["DEFAULT"] = "";
    AppoinmentStatus["CLOSED"] = "closed";
    AppoinmentStatus["IN_PROGRESS"] = "in-progress";
    AppoinmentStatus["OPEN"] = "open";
})(AppoinmentStatus || (exports.AppoinmentStatus = AppoinmentStatus = {}));
exports.AppoinmentInitial = {
    UserId: 0,
    NutritionistId: 0,
    Schedule: "",
    Status: AppoinmentStatus.DEFAULT,
    Remarks: "",
};
//# sourceMappingURL=appointment.js.map