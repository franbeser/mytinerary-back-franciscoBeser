import Joi from "joi";
import joiPwd from "joi-password-complexity";

const complexityOptions = {
    min: 8,
    max: 12,
    lowerCase: 1,
    upperCase: 1,
    numeric: 1,
    requirementCount: 4,
  };

export const signUpSchema = Joi.object({
    email: Joi.string().email().required().messages({
        "any.required": "Please insert email",
        "string.email": "Invalid email",
    }), 
    password: joiPwd(complexityOptions), 
    name: Joi.string().min(3).max(15),
    photo: Joi.string().uri(),
    birth_date: Joi.date(),
    age: Joi.number().min(18),
    phone: Joi.number(),
    verified: Joi.boolean(),

})