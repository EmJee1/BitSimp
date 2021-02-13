// import dependencies
import express from 'express'

// import controllers
import {
	signupController,
	loginController,
} from '../controllers/auth.controller.js'

// import middleware
import {
	hasValidPostBody,
	hasValidEmailInBody,
	hasValidPasswordInBody,
} from '../middleware/bodyValidation.middleware.js'

const router = express.Router()

router.post(
	'/signup',
	hasValidPostBody,
	hasValidEmailInBody,
	hasValidPasswordInBody,
	signupController
)
router.post(
	'/login',
	hasValidPostBody,
	hasValidEmailInBody,
	hasValidPasswordInBody,
	loginController
)

export default router