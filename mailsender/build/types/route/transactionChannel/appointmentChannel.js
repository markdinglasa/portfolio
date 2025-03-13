"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentChannel = void 0;
var AppointmentChannel;
(function (AppointmentChannel) {
    AppointmentChannel["APPOINTMENT_GET"] = "/transaction/appointment/get/:Id";
    AppointmentChannel["APPOINTMENT_GET_ALL"] = "/transaction/appointment/get-all/:Id";
    AppointmentChannel["APPOINTMENT_NEW"] = "/transaction/appointment/new";
    AppointmentChannel["APPOINTMENT_REMOVE"] = "/transaction/appointment/remove/:Id";
    AppointmentChannel["APPOINTMENT_UPDATE"] = "/transaction/appointment/update/:Id";
    AppointmentChannel["APPOINTMENT"] = "/transaction/appointment";
    AppointmentChannel["APPOINTMENT_ID"] = "/transaction/appointment/:Id";
    AppointmentChannel["APPOINTMENT_PARENT"] = "/transaction/appointment/u?=:Id";
})(AppointmentChannel || (exports.AppointmentChannel = AppointmentChannel = {}));
//# sourceMappingURL=appointmentChannel.js.map