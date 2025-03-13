import express,{ Request, Response, NextFunction} from "express";

import { API_VERSION } from "../constants";
import { singleMailSender } from "../functions";
import { mailsender } from "../validators";

const router = express.Router();
router.post(
  `${API_VERSION}/send-email/contact`,
    async (req:Request,res:Response): Promise<any> => {
        try {
            const { To, Subject, Message}:{To:string, Subject:string, Message:string} = req.body
            const { error } = mailsender.validate({ To, Subject, Message});
            if (error)
            return res.status(401).json({
                data: false,
                message: error.details[0]?.message || 'Missing'
            });
            singleMailSender('ryanmark.dinglasa@gmail.com', Subject, `${To} \n ${Message}`)
            res.status(200).json({data:true, message: 'Mail sent'})
        } catch (error:any) {
            console.log('MailSender Error:', error.message)
            res.status(500).json({data:false, message: error.message || 'Internal Server Error'})
        }
    }
);

export default router;
