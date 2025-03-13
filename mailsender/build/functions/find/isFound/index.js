"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFound = void 0;
const shared_1 = require("../../../shared");
const services_1 = require("../../../services");
// First field of FIELDS should be a field you want to test if it is null
const isFound = async (Query = "", Fields = [], Types = [], Datas = []) => {
    try {
        if (!Query || typeof Query !== "string" || !Query.trim())
            return { data: false, message: shared_1.Error.m010 };
        if (!Array.isArray(Fields) ||
            Fields.length === 0 ||
            Fields.some((field) => typeof field !== "string"))
            return { data: false, message: shared_1.Error.m008 };
        if (!Types.every((field) => field !== undefined)) {
            const undefinedIndex = Types.findIndex((field) => field === undefined);
            return {
                data: false,
                message: `Type for field'${undefinedIndex + 1}' is undefined`,
            };
        }
        if (!Datas.every((data) => data !== undefined)) {
            const undefinedIndex = Datas.findIndex((data) => data === undefined);
            return {
                data: false,
                message: `Data for field'${undefinedIndex + 1}' is undefined`,
            };
        }
        if (Fields.length !== Datas.length || Fields.length !== Types.length)
            return { data: false, message: shared_1.Error.m009 };
        const response = await services_1.GetService.byFields(Query, Fields, Types, Datas);
        if (!response || response.length < 1 || response[0][Fields[0]] === null)
            return { data: false, message: shared_1.Error.m011 };
        return { data: true, message: shared_1.Success.m005 };
    }
    catch (error) {
        logging.log("----------------------------------------");
        logging.error("Find-Fn [isFound]:", error.message);
        logging.log("----------------------------------------");
        return { data: false, message: shared_1.Error.m001 };
    }
};
exports.isFound = isFound;
//# sourceMappingURL=index.js.map