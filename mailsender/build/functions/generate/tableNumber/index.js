"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tableNumber = void 0;
const services_1 = require("../../../services");
const shared_1 = require("../../../shared");
const tableNumber = async (Table = shared_1.DBTable.t000) => {
    try {
        if (!Object.values(shared_1.DBTable).includes(Table) ||
            typeof Table !== "string" ||
            !Table.trim())
            return { data: null, message: shared_1.Error.m006 };
        const response = await services_1.GetService.byQuery(`SELECT MAX(RecNumber) AS Number FROM \`${Table}\``);
        const maxNumber = response && response[0].Number ? parseInt(response[0].Number, 10) : 0;
        const tableNumber = String((isNaN(maxNumber) ? 0 : maxNumber) + 1).padStart(8, "0");
        return { data: tableNumber, message: shared_1.Success.m001 };
    }
    catch (error) {
        logging.log("----------------------------------------");
        logging.error("Generate-Fn [tableNumber]:", error.message);
        logging.log("----------------------------------------");
        return { data: null, message: shared_1.Error.m001 };
    }
};
exports.tableNumber = tableNumber;
//# sourceMappingURL=index.js.map