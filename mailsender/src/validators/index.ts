import Joi from "joi";

export const mailsender = Joi.object({
  To: Joi.string().required(),
  Message: Joi.string().allow("").allow(null).optional(),
  Subject: Joi.string().required(),
});
