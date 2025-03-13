"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getByFields_1 = require("./getByFields");
const getById_1 = require("./getById");
const getByIdAndQuery_1 = require("./getByIdAndQuery");
const getByQuery_1 = require("./getByQuery");
const getByTable_1 = require("./getByTable");
class GetService {
    constructor() {
        this.byFields = getByFields_1.getByFields;
        this.byId = getById_1.getById;
        this.byQuery = getByQuery_1.getByQuery;
        this.byTable = getByTable_1.getByTable;
        this.byIdAndQuery = getByIdAndQuery_1.getByIdAndQuery;
    }
}
exports.default = new GetService;
//# sourceMappingURL=index.js.map