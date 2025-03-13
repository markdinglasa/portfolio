"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeApp = exports.httpServer = void 0;
const http_1 = __importDefault(require("http"));
const express_1 = __importDefault(require("express"));
require("./config/logging");
const helmet_1 = __importDefault(require("helmet"));
const middleware_1 = require("./middleware");
const config_1 = require("./config");
const routers_1 = __importDefault(require("./routers"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
const initializeApp = async () => {
    logging.log("----------------------------------------");
    logging.log("Initializing Server");
    logging.log("----------------------------------------");
    app.use(express_1.default.urlencoded({ extended: true }));
    app.use(express_1.default.json());
    logging.log("----------------------------------------");
    logging.log("Logging & Configuration");
    logging.log("----------------------------------------");
    app.use((0, helmet_1.default)());
    app.use(middleware_1.loggingHandler);
    app.use(middleware_1.corsHandler);
    app.use(middleware_1.route500);
    app.options("/*", middleware_1.route204);
    app.use(routers_1.default);
    app.use(middleware_1.route404);
    app.use(body_parser_1.default.json({ strict: true }));
    logging.log("----------------------------------------");
    logging.log("Starting Server");
    logging.log("----------------------------------------");
    exports.httpServer = http_1.default.createServer(app);
    exports.httpServer.listen(config_1.server.SERVER_PORT, () => {
        logging.log("----------------------------------------");
        logging.log(`Server started on ${config_1.server.SERVER_HOSTNAME}:${config_1.server.SERVER_PORT}`);
        logging.log("----------------------------------------");
    });
};
exports.initializeApp = initializeApp;
if (config_1.NODE_ENV !== "test") {
    (0, exports.initializeApp)();
}
exports.default = app;
//export const Shutdown = (callback: any) => httpServer && httpServer.close(callback);
//# sourceMappingURL=index.js.map