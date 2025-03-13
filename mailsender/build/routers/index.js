"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const constants_1 = require("../constants");
const functions_1 = require("../functions");
const validators_1 = require("../validators");
const router = express_1.default.Router();
router.post(`${constants_1.API_VERSION}/send-email/contact`, async (req, res) => {
    try {
        const { To, Subject, Message } = req.body;
        const { error } = validators_1.mailsender.validate({ To, Subject, Message });
        if (error)
            return res.status(401).json({
                data: false,
                message: error.details[0]?.message || 'Missing'
            });
        (0, functions_1.singleMailSender)('ryanmark.dinglasa@gmail.com', Subject, `${To} \n ${Message}`);
        res.status(200).json({ data: true, message: 'Mail sent' });
    }
    catch (error) {
        console.log('MailSender Error:', error.message);
        res.status(500).json({ data: false, message: error.message || 'Internal Server Error' });
    }
});
exports.default = router;
//# sourceMappingURL=index.js.map