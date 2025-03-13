"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetDateTime = void 0;
const GetDateTime = () => {
    const dateToday = new Date();
    dateToday.setUTCHours(dateToday.getUTCHours());
    return dateToday;
};
exports.GetDateTime = GetDateTime;
//# sourceMappingURL=getDataTime.js.map