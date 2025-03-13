"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateRecords = void 0;
const config_1 = require("../../../config");
const shared_1 = require("../../../shared");
const updateRecords = async (Table, Fields, Values, // 2D array for each row's field values
Ids) => {
    let connection;
    try {
        // Input validation
        if (!Object.values(shared_1.DBTable).includes(Table) ||
            typeof Table !== "string" ||
            !Table.trim()) {
            throw new Error("Table must be provided as a valid non-empty string.");
        }
        if (!Array.isArray(Fields) ||
            Fields.length === 0 ||
            Fields.some((field) => typeof field !== "string")) {
            throw new Error("Fields must be a non-empty array of strings.");
        }
        if (!Array.isArray(Values) || Values.length !== Ids.length) {
            throw new Error("Values array must match the length of Ids.");
        }
        if (!Array.isArray(Ids) || Ids.length === 0) {
            throw new Error("Ids must be a non-empty array of numbers.");
        }
        // Get connection from pool
        connection = await config_1.pool.getConnection();
        // Start transaction
        await connection.beginTransaction();
        // Create prepared statement
        const setClause = Fields.map((field) => `\`${field}\` = ?`).join(", ");
        const sql = `UPDATE \`${Table}\` SET ${setClause} WHERE Id = ?`;
        // Execute all updates
        for (let i = 0; i < Ids.length; i++) {
            const rowValues = [...Values[i], Ids[i]]; // Append Id to the row values
            await connection.execute(sql, rowValues);
        }
        // Commit transaction
        await connection.commit();
        return true;
    }
    catch (error) {
        // Rollback transaction if error occurs
        if (connection)
            await connection.rollback();
        throw new Error(`Bulk update failed: ${error.message}`);
    }
    finally {
        // Release connection back to pool
        if (connection)
            connection.release();
    }
};
exports.updateRecords = updateRecords;
//# sourceMappingURL=index.js.map