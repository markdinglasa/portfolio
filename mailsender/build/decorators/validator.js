"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validate = void 0;
const Validate = (schema) => {
    return function (_target, _propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = async function (req, res, next) {
            try {
                await schema.validateAsync(req.body);
            }
            catch (error) {
                logging.error(error);
                return res.status(400).json(error.details[0]);
            }
            return originalMethod.call(this, req, res, next);
        };
        return descriptor;
    };
};
exports.Validate = Validate;
//# sourceMappingURL=validator.js.map