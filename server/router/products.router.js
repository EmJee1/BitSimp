import express from 'express'

// import controllers
import {
	bestSellersController,
	verifyProductController,
} from '../controllers/products.controller.js'

// import middleware
import { hasValidPostBody } from '../middleware/bodyValidation.middleware.js'
import { hasValidTokenInHeader } from '../middleware/jsonwebtoken.middleware.js'
import multerUpload from '../middleware/multer.middleware.js'

const router = express.Router()

router.get('/bestsellers', bestSellersController)
router.get('/newcomers')
router.post(
	'/addProduct',
	hasValidTokenInHeader,
	verifyProductController,
	multerUpload.array('product-image', 8)
)

export default router