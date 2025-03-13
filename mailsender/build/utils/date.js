"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDateToMMDDYY = void 0;
const formatDateToMMDDYY = (currentDate) => {
    try {
        const date = new Date(currentDate);
        //if (isNaN(date.getTime())) throw new Error("Invalid date");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        const year = String(date.getFullYear());
        return `${month}/${day}/${year}`;
    }
    catch (error) {
        return "";
    }
};
exports.formatDateToMMDDYY = formatDateToMMDDYY;
//# sourceMappingURL=date.js.map