"use strict";
/**********************************************
 * AUTHOR       : Mark Dinglasa
 * COMMENT/S    : Service-updateRecords
 * CHANGES      : N/A
 * LOG-DATE     : 2025-02-03
 ***********************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateByCondition = void 0;
const config_1 = require("../../../config");
const shared_1 = require("../../../shared");
const updateByCondition = async (Table = shared_1.DBTable.t000, Fields = [], Types = [], Datas = [], Condition = "", ConditionValues = []) => {
    try {
        if (!Object.values(shared_1.DBTable).includes(Table) ||
            typeof Table !== "string" ||
            !Table.trim())
            throw new Error("Table must be provided as a valid non-empty string");
        if (!Array.isArray(Fields) ||
            Fields.length === 0 ||
            Fields.some((field) => typeof field !== "string"))
            throw new Error("Field must be a non-empty array of strings");
        if (!Types.every((field) => field !== undefined)) {
            const undefinedIndex = Types.findIndex((field) => field === undefined);
            throw new Error(`Type for field'${undefinedIndex + 1}' is undefined`);
        }
        if (!Datas.every((data) => data !== undefined)) {
            const undefinedIndex = Datas.findIndex((data) => data === undefined);
            throw new Error(`Data for field'${undefinedIndex + 1}' is undefined`);
        }
        if (Fields.length !== Datas.length || Fields.length !== Types.length)
            throw new Error("Parameters are empty, or their lengths do not match");
        if (!Condition || typeof Condition !== "string" || !Condition.trim()) {
            throw new Error("A valid condition must be provided for the WHERE clause");
        }
        if (!Array.isArray(ConditionValues) || ConditionValues.length === 0) {
            throw new Error("ConditionValues must be a non-empty array");
        }
        if (!config_1.pool)
            throw new Error("Connection failed");
        const setFields = Fields.map((field) => `${field} = ?`).join(", ");
        const sqlQuery = `UPDATE \`${Table}\` SET ${setFields} WHERE ${Condition}`;
        const values = [...Datas, ...ConditionValues];
        const [result] = await config_1.pool.execute(sqlQuery, values);
        if (result.affectedRows <= 0)
            throw new Error("No records were updated");
        return true;
    }
    catch (error) {
        logging.log("----------------------------------------");
        logging.error("Update-Service [updateByCondition]:", error.message);
        logging.log("----------------------------------------");
        throw error;
    }
};
exports.updateByCondition = updateByCondition;
//# sourceMappingURL=index.js.map