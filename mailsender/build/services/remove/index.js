"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const removeByFields_1 = require("./removeByFields");
const removeById_1 = require("./removeById");
class RemoveService {
    constructor() {
        this.byId = removeById_1.removeById;
        this.byFields = removeByFields_1.removeByFields;
    }
}
exports.default = new RemoveService;
//# sourceMappingURL=index.js.map