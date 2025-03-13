"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
const Controller = (baseRoute = "") => {
    return (target) => {
        Reflect.defineMetadata("baseRoute", baseRoute, target);
    };
};
exports.Controller = Controller;
//# sourceMappingURL=controller.js.map