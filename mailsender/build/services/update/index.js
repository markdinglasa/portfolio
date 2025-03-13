"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const updateRecord_1 = require("./updateRecord");
const updateByCondition_1 = require("./updateByCondition");
const updateRecords_1 = require("./updateRecords");
class UpdateService {
    constructor() {
        this.record = updateRecord_1.updateRecord;
        this.records = updateRecords_1.updateRecords;
        this.recordByCondition = updateByCondition_1.updateByCondition;
    }
}
exports.default = new UpdateService();
//# sourceMappingURL=index.js.map