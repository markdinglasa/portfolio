"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadImage = exports.upload = void 0;
const promises_1 = __importDefault(require("fs/promises")); // Using fs/promises for promise-based methods
const path_1 = __importDefault(require("path"));
const crypto_1 = require("crypto");
const multer_1 = __importDefault(require("multer"));
/****************************************************************
  STATUS               : UPDATED
  DATE CREATED/UPDATED : September 10, 2024
  PURPOSE              : To upload an image
  PROGRAMMER           : MARK DINGLASA
  FUNCTION NAME        : uploadImage(imagePath)
****************************************************************/
// using ES module
const targetDir = path_1.default.join(__dirname, "..", "..", "..", "..", "frontend", "public", "image");
// the frontend is in the root folder of this project folder
const storage = multer_1.default.diskStorage({
    destination: function (_req, _file, cb) {
        cb(null, targetDir);
    },
    filename: function (_req, _file, cb) {
        const filename = `${Date.now()}.jpg`;
        cb(null, filename);
    },
});
exports.upload = (0, multer_1.default)({ storage: storage });
const uploadImage = async (imagePath) => {
    try {
        const MB = 1048576;
        const imgfile = path_1.default.parse(imagePath).base.replace(/\\/g, "/");
        if (!imgfile)
            return { data: null, message: "Please select an image" };
        //sends the image to the client side
        const targetFile = path_1.default.join(targetDir, imgfile);
        const imageFileType = path_1.default.extname(targetFile).toLowerCase();
        //console.log(targetFile);
        //return { data: targetFile, message: "" };
        // Check if imagePath is a directory
        const isDirectory = await promises_1.default
            .stat(imagePath)
            .then((stats) => stats.isDirectory());
        if (isDirectory)
            return {
                data: null,
                message: "Please provide a valid image file path, not a directory",
            };
        if (imageFileType !== ".jpg" &&
            imageFileType !== ".png" &&
            imageFileType !== ".jpeg") {
            return {
                data: null,
                message: "Only JPG, PNG, and JPEG files are allowed.",
            };
        }
        const imageStats = await promises_1.default.stat(imagePath);
        if (imageStats.size > 2 * MB) {
            return { data: null, message: "Image file size is more than 2 MB" };
        }
        const imgnewfile = (0, crypto_1.createHash)("md5").update(imgfile).digest("hex") +
            Date.now() +
            path_1.default.extname(imgfile);
        // Ensure the target directory exists
        await promises_1.default.mkdir(targetDir, { recursive: true });
        // Copy image to destination directory
        await promises_1.default.copyFile(imagePath, path_1.default.join(targetDir, imgnewfile));
        // Return the new file name if there were no errors
        return { data: imgnewfile, message: "Successful" };
    }
    catch (error) {
        return { data: null, message: error.message };
    }
};
exports.uploadImage = uploadImage;
//# sourceMappingURL=index.js.map