"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const addRecord_1 = require("./addRecord");
const addRecords_1 = require("./addRecords");
class AddService {
    constructor() {
        this.record = addRecord_1.addRecord;
        this.records = addRecords_1.addRecords;
    }
}
exports.default = new AddService;
//# sourceMappingURL=index.js.map