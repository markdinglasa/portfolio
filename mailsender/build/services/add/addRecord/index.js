"use strict";
/**********************************************
 * AUTHOR       : Mark Dinglasa
 * COMMENT/S    : Service-addRecord
 * CHANGES      : N/A
 * LOG-DATE     : 2024-09-24
 ***********************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.addRecord = void 0;
const config_1 = require("../../../config");
const shared_1 = require("../../../shared");
const addRecord = async (Table = shared_1.DBTable.t000, Fields = [], Types = [], Datas = []) => {
    try {
        if (!Object.values(shared_1.DBTable).includes(Table) || typeof Table !== 'string' || !Table.trim())
            throw new Error('Table must be provided as a valid non-empty string');
        if (!Array.isArray(Fields) || Fields.length === 0 || Fields.some(field => typeof field !== 'string'))
            throw new Error('Field must be a non-empty array of strings');
        if (!Types.every(field => field !== undefined)) {
            const undefinedIndex = Types.findIndex((field) => field === undefined);
            throw new Error(`Type for field'${undefinedIndex + 1}' is undefined`);
        }
        if (!Datas.every(data => data !== undefined)) {
            const undefinedIndex = Datas.findIndex((data) => data === undefined);
            throw new Error(`Data for field'${undefinedIndex + 1}' is undefined`);
        }
        if (Fields.length !== Datas.length || Fields.length !== Types.length)
            throw new Error('Parameters are empty, or their lengths do not match');
        if (!config_1.pool)
            throw new Error('Connection failed');
        const placeholders = Fields.map(() => '?').join(', ');
        const sqlQuery = `INSERT INTO \`${Table}\` (${Fields.join(', ')}) VALUES (${placeholders})`;
        const values = [...Datas];
        const [result] = await config_1.pool.execute(sqlQuery, values);
        if (result.affectedRows < 1)
            throw new Error('No records were inserted');
        return true;
    }
    catch (error) {
        logging.log("----------------------------------------");
        logging.error("Add-Service [addRecord]:", error.message);
        logging.log("----------------------------------------");
        throw error;
    }
};
exports.addRecord = addRecord;
//# sourceMappingURL=index.js.map