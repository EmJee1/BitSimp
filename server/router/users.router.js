import express from 'express'

// import controllers
import { getUserInfoByToken } from '../controllers/users.controller.js'

// import middleware
import { hasValidTokenInHeader } from '../middleware/jsonwebtoken.middleware.js'

const router = express.Router()

router.get('/getInfoById', hasValidTokenInHeader, getUserInfoByToken)

export default router