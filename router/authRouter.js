import { Router } from "express";
import authController from "../controllers/authController.js";
import { signUpSchema } from "../validators/signUpValidator.js";
import validator from "../middlewares/validator.js";
// import loginWithToken from "../controllers/authController.js";
// import signIn from "../controllers/authController.js";
import { signInSchema } from "../validators/signInValidator.js";
import passport from "../middlewares/passport.js";
// import signUp from "../controllers/authController.js";
import { emailExists } from "../middlewares/emailExists.js";

const authRouter = Router()
const { signUp, signIn, loginWithToken } = authController
// authRouter.get('/')
// authRouter.get('/:id')

authRouter.post('/up', validator(signUpSchema), emailExists, signUp)
// authRouter.put('/:id')
// authRouter.delete('/:id')

authRouter.post('/in', signIn)
authRouter.get('/token', passport.authenticate( 'jwt', {session:false} ) ,loginWithToken)

export default authRouter