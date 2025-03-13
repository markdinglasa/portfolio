"use strict";
/**********************************************
 * AUTHOR       : Mark Dinglasa
 * COMMENT/S    : Service-getById
 * CHANGES      : N/A
 * LOG-DATE     : 2024-09-24
 ***********************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.getById = void 0;
const config_1 = require("../../../config");
const shared_1 = require("../../../shared");
const getById = async (Id = 0, Table = shared_1.DBTable.t000) => {
    try {
        if (!Id || typeof Id !== "number" || isNaN(Id))
            throw new Error("Id must be a valid number");
        if (!Object.values(shared_1.DBTable).includes(Table) ||
            typeof Table !== "string" ||
            !Table.trim())
            throw new Error("Table must be provided as a valid non-empty string");
        if (!config_1.pool)
            throw new Error("Connection failed");
        const sqlQuery = `SELECT * FROM \`${Table}\` WHERE Id = ?`;
        const [rows] = (await config_1.pool.execute(sqlQuery, [Id]));
        if (rows.length === 0) {
            return []; //throw new Error(`No record found with Id ${Id} in table ${Table}`);
        }
        return rows;
    }
    catch (error) {
        logging.log("----------------------------------------");
        logging.error("Get-Service [getById]:", error.message);
        logging.log("----------------------------------------");
        throw error;
    }
};
exports.getById = getById;
//# sourceMappingURL=index.js.map