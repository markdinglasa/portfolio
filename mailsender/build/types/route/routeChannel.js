"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteChannel = void 0;
const authChannel_1 = require("./authChannel");
const setupChannel_1 = require("./setupChannel");
const transactionChannel_1 = require("./transactionChannel");
const utilityChannel_1 = require("./utilityChannel");
exports.RouteChannel = {
    ...transactionChannel_1.TransactionChannel,
    ...utilityChannel_1.UtilityChannel,
    ...setupChannel_1.SetupChannel,
    ...authChannel_1.AuthChannel,
};
//# sourceMappingURL=routeChannel.js.map