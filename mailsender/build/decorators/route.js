"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Route = void 0;
require("reflect-metadata");
const Route = (method, path = "", ...middleware) => {
    return (target, _key, descriptor) => {
        if (typeof descriptor.value !== "function") {
            throw new Error(`@Route decorator can only be applied to methods.`);
        }
        // Retrieve existing route handlers metadata or initialize a new Map
        const routeHandlers = Reflect.getMetadata("routeHandlers", target) ?? new Map();
        // Ensure the method has its own sub-map
        if (!routeHandlers.has(method)) {
            routeHandlers.set(method, new Map());
        }
        const methodMap = routeHandlers.get(method);
        const routePath = path || "/";
        // Retrieve existing handlers for the route or initialize an empty array
        const existingHandlers = methodMap.get(routePath) ?? [];
        // Add middleware and the handler to the route
        methodMap.set(routePath, [
            ...existingHandlers,
            ...middleware,
            descriptor.value,
        ]);
        // Update metadata with the modified routeHandlers map
        Reflect.defineMetadata("routeHandlers", routeHandlers, target);
    };
};
exports.Route = Route;
//# sourceMappingURL=route.js.map