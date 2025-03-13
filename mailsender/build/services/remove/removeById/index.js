"use strict";
/**********************************************
 * AUTHOR       :
 * COMMENT/S    : Service-removeById
 * CHANGES      : N/A
 * LOG-DATE     : 2024-09-24
 ***********************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeById = void 0;
const config_1 = require("../../../config");
const shared_1 = require("../../../shared");
const removeById = async (Id = 0, Table = shared_1.DBTable.t000) => {
    try {
        if (!Id || typeof Id !== 'number' || isNaN(Id))
            throw new Error('Id must be a valid number');
        if (!Object.values(shared_1.DBTable).includes(Table) || typeof Table !== 'string' || !Table.trim())
            throw new Error('Table must be provided as a valid non-empty string');
        if (!config_1.pool)
            throw new Error('Connection failed');
        const sqlQuery = `DELETE FROM \`${Table}\` WHERE Id = ?`;
        const [result] = await config_1.pool.execute(sqlQuery, [Id]);
        if (result.affectedRows <= 0)
            throw new Error('No records were deleted');
        return true;
    }
    catch (error) {
        logging.log("----------------------------------------");
        logging.error("Remove-Service [removeById]:", error.message);
        logging.log("----------------------------------------");
        throw error;
    }
};
exports.removeById = removeById;
//# sourceMappingURL=index.js.map