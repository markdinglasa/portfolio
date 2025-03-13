"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getByFields = void 0;
const config_1 = require("../../../config");
/**
 * Service to execute SQL queries with dynamic fields and parameters
 * @param Query - SQL query template with placeholders (e.g., 'SELECT * FROM table WHERE field1 = ? AND field2 = ?')
 * @param Fields - Array of field names (for reference in error handling)
 * @param Types - Array of types (functions) for data validation (e.g., [Number, String])
 * @param Datas - Array of data values to be passed as parameters in the query
 * @returns Array<any> - Result set from the query
 */
const getByFields = async (Query = "", Fields = [], Types = [], Datas = []) => {
    try {
        if (typeof Query !== "string" || !Query.trim())
            throw new Error("Query must be a non-empty string");
        if (!Array.isArray(Fields) ||
            Fields.length === 0 ||
            Fields.some((field) => typeof field !== "string"))
            throw new Error("Fields must be a non-empty array of strings");
        if (!Array.isArray(Types) ||
            Types.length !== Fields.length ||
            Types.some((type) => typeof type !== "function"))
            throw new Error("Types must be an array of functions matching the length of Fields");
        if (!Array.isArray(Datas) || Datas.length !== Fields.length)
            throw new Error("Parameter is empty, or their lengths do not match");
        if (!config_1.pool)
            throw new Error("Connection failed");
        // Convert Datas using Types
        const values = Datas.map((data, index) => Types[index](data));
        // Execute the query
        const [rows] = await config_1.pool.execute(Query, values);
        return rows;
    }
    catch (error) {
        logging.log("----------------------------------------");
        logging.error("Get-Service [getByFields]:", error.message);
        logging.log("----------------------------------------");
        throw error;
    }
};
exports.getByFields = getByFields;
// SAMPLE USAGE
/*(async () => {
    const response = await getByFields(
        'SELECT * FROM userterms WHERE Id = ? AND UserId = ?',
        ['Id', 'UserId'],
        [Number, Number],
        [1, 16]
    );
    console.log(response);
})();*/
//# sourceMappingURL=index.js.map