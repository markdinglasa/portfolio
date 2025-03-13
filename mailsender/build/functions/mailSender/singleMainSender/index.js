"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.singleMailSender = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const shared_1 = require("../../../shared");
const config_1 = require("../../../config");
const transnporter = nodemailer_1.default.createTransport({
    secure: true,
    host: "smtp.gmail.com",
    port: 465,
    auth: {
        user: config_1.DEFAULT_EMAIL,
        pass: config_1.DEFAULT_EMAIL_PASSWORD,
    },
});
const singleMailSender = (To = "", Subject = "", Message = "") => {
    try {
        if (!To || !Subject || !Message) {
            return { data: false, message: "Invalid email parameters" };
        }
        transnporter.sendMail({
            from: config_1.DEFAULT_EMAIL,
            to: To,
            subject: Subject,
            html: Message,
        });
        return { data: true, message: "Email sent" };
    }
    catch (error) {
        logging.log("----------------------------------------");
        logging.error("MailSender-Fn [singleMailSender]:", error.message);
        logging.log("----------------------------------------");
        return { data: false, message: error.message || shared_1.Error.m001 };
    }
};
exports.singleMailSender = singleMailSender;
/*async () => {
  singleMailSender("ryanmarkmj@gmail.com", "test", "test");
};*/
//# sourceMappingURL=index.js.map