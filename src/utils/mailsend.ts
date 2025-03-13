
/*import nodemailer from "nodemailer";
import { DEFAULT_EMAIL, DEFAULT_EMAIL_PASSWORD } from "../constants";

const transnporter = nodemailer.createTransport({
    secure: true,
    host: "smtp.gmail.com",
    port: 465,
    auth: {
      user: DEFAULT_EMAIL as string,
      pass: DEFAULT_EMAIL_PASSWORD as string,
    },
  });
  
  export const MailSender = (
    To: string = "",
    Subject: string = "",
    Message: string = "",
  ) => {
    try {
        if (!To || !Subject || !Message) {
            return { data: false, message: "Invalid email parameters" };
        }
        transnporter.sendMail({
            from: To,
            to: DEFAULT_EMAIL,
            subject: Subject,
            html: Message,
        });
        return { data: true, message: "Email sent" };
    } catch (error: any) {
        console.log("----------------------------------------");
        console.error("MailSender-Fn [singleMailSender]:", error.message);
        console.log("----------------------------------------");
        return { data: false, message: error.message  };
    }
  };*/