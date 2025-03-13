"use strict";
/**********************************************
 * AUTHOR       : Mark Dinglasa
 * COMMENT/S    : Service-getByIdAndQuery
 * CHANGES      : N/A
 * LOG-DATE     : 2024-09-24
 ***********************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.getByIdAndQuery = void 0;
const config_1 = require("../../../config");
const getByIdAndQuery = async (Id = 0, Query = "") => {
    try {
        if (!Id || typeof Id !== "number" || isNaN(Id))
            throw new Error("Id must be a valid number");
        if (typeof Query !== "string" || !Query.trim())
            throw new Error("Query must be provided as a non-empty string");
        if (!config_1.pool)
            throw new Error("Connection failed");
        const [rows] = (await config_1.pool.execute(Query, Id));
        /*if (rows.length === 0) {
                throw new Error(`No record found with Id ${Id}`);
            }*/
        return rows;
    }
    catch (error) {
        logging.log("----------------------------------------");
        logging.error("Get-Service [getByIdAndQuery]:", error.message);
        logging.log("----------------------------------------");
        throw error;
    }
};
exports.getByIdAndQuery = getByIdAndQuery;
//# sourceMappingURL=index.js.map