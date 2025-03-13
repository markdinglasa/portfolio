"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getByUsername = exports.getByEmail = void 0;
const services_1 = require("../../../services");
const shared_1 = require("../../../shared");
const getByEmail = async (Email = "") => {
    try {
        if (!Email || typeof Email !== "string" || !Email.trim())
            return { data: [], message: shared_1.Error.m014 };
        const user = await services_1.GetService.byFields(shared_1.FnQuery.q002, ["Email"], [String], [Email]);
        if (!user)
            return { data: [], message: shared_1.Error.m011 };
        return { data: user[0], message: shared_1.Success.m001 };
    }
    catch (error) {
        logging.log("----------------------------------------");
        logging.error("Get-Fn [getByEmail]:", error.message);
        logging.log("----------------------------------------");
        return { data: [], message: error.message || shared_1.Error.m001 };
    }
};
exports.getByEmail = getByEmail;
const getByUsername = async (Username = "") => {
    try {
        if (!Username || typeof Username !== "string" || !Username.trim())
            return { data: {}, message: shared_1.Error.m014 };
        const user = await services_1.GetService.byFields(shared_1.FnQuery.q001, ["Username"], [String], [Username]);
        if (!user)
            return { data: {}, message: shared_1.Error.m011 };
        return { data: user[0], message: shared_1.Success.m001 };
    }
    catch (error) {
        logging.log("----------------------------------------");
        logging.error("Get-Fn [getByUsername]:", error.message);
        logging.log("----------------------------------------");
        return { data: {}, message: error.message || shared_1.Error.m001 };
    }
};
exports.getByUsername = getByUsername;
//# sourceMappingURL=index.js.map