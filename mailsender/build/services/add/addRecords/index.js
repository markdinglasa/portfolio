"use strict";
// add multiple records using transaction
Object.defineProperty(exports, "__esModule", { value: true });
exports.addRecords = void 0;
const config_1 = require("../../../config");
const addRecords = async (Table = "", Fields = [], Datas = []) => {
    try {
        if (!Table || typeof Table !== "string")
            throw new Error("Table name must be provided as a non-empty string");
        if (Fields.length === 0 || Datas.length === 0)
            throw new Error("Fields array must not be empty and at least one record must be provided");
        const placeholders = Fields.map(() => "?").join(", ");
        const valuePlaceholders = Datas.map(() => `(${placeholders})`).join(", ");
        const query = `INSERT INTO ${Table} (${Fields.join(", ")}) VALUES ${valuePlaceholders}`;
        const flatData = Datas.flat();
        const [result] = await config_1.pool.execute(query, flatData);
        return result.affectedRows;
    }
    catch (error) {
        logging.log("----------------------------------------");
        logging.error("Add-Service [addRecords]:", error.message);
        logging.log("----------------------------------------");
        throw error;
    }
};
exports.addRecords = addRecords;
//# sourceMappingURL=index.js.map