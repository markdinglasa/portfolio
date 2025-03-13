"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const constants_1 = require("../../constants");
const types_1 = require("../../types");
const promises_1 = __importDefault(require("fs/promises")); // Using fs/promises for promise-based methods
const path_1 = __importDefault(require("path"));
const router = express_1.default.Router();
const multer_1 = __importDefault(require("multer"));
const middleware_1 = require("../../middleware");
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        const targetDir = path_1.default.join(__dirname, "..", "..", "..", "frontend", "public", "image");
        console.log("targetDir:", targetDir);
        promises_1.default.mkdir(targetDir, { recursive: true })
            .then(() => cb(null, targetDir))
            .catch((err) => cb(err, targetDir));
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        const ext = path_1.default.extname(file.originalname);
        cb(null, `${uniqueSuffix}${ext}`);
    },
});
const upload = (0, multer_1.default)({
    storage,
    limits: { fileSize: 2 * 1024 * 1024 }, // 2MB limit
    fileFilter: (req, file, cb) => {
        const allowedTypes = [".jpg", ".jpeg", ".png"];
        const ext = path_1.default.extname(file.originalname).toLowerCase();
        if (allowedTypes.includes(ext)) {
            cb(null, true);
        }
        else {
            cb(new Error("Only JPG, PNG, and JPEG files are allowed."));
        }
    },
});
router.post(`${constants_1.API_VERSION}${types_1.RouteChannel.UPLOAD_IMAGE}`, middleware_1.TokenHandler.verifyToken, upload.single("image"), (req, res) => {
    try {
        if (req.file) {
            res.json({
                message: "Image uploaded successfully",
                path: `/image/${req.file.filename}`,
            });
        }
        else {
            res.status(400).json({ path: null, message: "Failed to upload image" });
        }
    }
    catch (error) {
        res.status(500).json({
            path: null,
            message: error.message || "Failed to upload image",
        });
    }
});
exports.default = router;
//# sourceMappingURL=uploadImage.js.map