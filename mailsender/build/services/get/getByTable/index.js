"use strict";
/**********************************************
 * AUTHOR       : Mark Dinglasa
 * COMMENT/S    : Service-getByQuery
 * CHANGES      : N/A
 * LOG-DATE     : 2024-09-24
 ***********************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.getByTable = void 0;
const config_1 = require("../../../config");
const shared_1 = require("../../../shared");
const getByTable = async (Table = shared_1.DBTable.t000) => {
    try {
        if (!Object.values(shared_1.DBTable).includes(Table) ||
            typeof Table !== "string" ||
            !Table.trim())
            throw new Error("Table must be provided as a valid non-empty string");
        if (!config_1.pool)
            throw new Error("Connection failed");
        const [rows] = (await config_1.pool.execute(`SELECT * FROM ${Table}`));
        if (rows.length === 0) {
            return []; //throw new Error(`No record found`);
        }
        return rows;
    }
    catch (error) {
        logging.log("----------------------------------------");
        logging.error("Get-Service [getByTable]:", error.message);
        logging.log("----------------------------------------");
        throw error;
    }
};
exports.getByTable = getByTable;
//# sourceMappingURL=index.js.map