"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.route404 = route404;
exports.route204 = route204;
exports.route500 = route500;
function route404(req, res, next) {
    const error = new Error("Not found");
    logging.warning(error.message);
    res.status(404).json({
        error: {
            message: error.message,
        },
    });
}
// Handle preflight requests
function route204(req, res, next) {
    logging.warning("Preflight requests...");
    res.status(204).end();
}
//  Define a global error handler middleware
function route500(err, req, res, next) {
    logging.error(err.message);
    res.status(500).json({
        error: err.message || "Something went wrong. Please try again later.",
    });
    next();
}
//# sourceMappingURL=route404.js.map