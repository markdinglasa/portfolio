"use strict";
/**********************************************
 * AUTHOR       : Mark Dinglasa
 * COMMENT/S    : Fn-isDefault
 * CHANGES      : N/A
 * LOG-DATE     : 2024-09-24
 ***********************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDefault = void 0;
const shared_1 = require("../../../shared");
const isDefault = async (Id = 0, Table = "") => {
    try {
        if (!Id || typeof Id !== "number" || isNaN(Id))
            return { data: false, message: shared_1.Error.m005 };
        if (!Table || typeof Table !== "string")
            return { data: false, message: shared_1.Error.m006 };
        if (shared_1.defaultRecord.hasOwnProperty(Table)) {
            const tableKey = Table;
            if (shared_1.defaultRecord[tableKey].includes(Id))
                return { data: true, message: shared_1.Success.m005 };
        }
        return { data: false, message: shared_1.Error.m007 };
    }
    catch (error) {
        logging.log("----------------------------------------");
        logging.error("Find-Fn [isDefault]:", error.message);
        logging.log("----------------------------------------");
        return { data: false, message: shared_1.Error.m001 };
    }
};
exports.isDefault = isDefault;
//# sourceMappingURL=index.js.map