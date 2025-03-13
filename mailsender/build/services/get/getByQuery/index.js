"use strict";
/**********************************************
 * AUTHOR       : Mark Dinglasa
 * COMMENT/S    : Service-getByQuery
 * CHANGES      : N/A
 * LOG-DATE     : 2024-09-24
 ***********************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.getByQuery = void 0;
const config_1 = require("../../../config");
const getByQuery = async (Query = "") => {
    try {
        if (typeof Query !== "string" || !Query.trim())
            throw new Error("Query must be provided as a non-empty string");
        if (!config_1.pool)
            throw new Error("Connection failed");
        const [rows] = (await config_1.pool.execute(Query));
        if (rows.length === 0) {
            return []; //throw new Error(`No record found`);
        }
        return rows;
    }
    catch (error) {
        logging.log("----------------------------------------");
        logging.error("Get-Service [getByQuery]:", error.message);
        logging.log("----------------------------------------");
        throw error;
    }
};
exports.getByQuery = getByQuery;
//# sourceMappingURL=index.js.map