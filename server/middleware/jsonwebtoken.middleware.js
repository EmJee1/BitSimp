import UserModel from '../database/models/user.model.js'
import jwt from 'jsonwebtoken'

const { JSON_WEBTOKEN_SECRET } = process.env

export const hasValidTokenInHeader = async (req, res, next) => {
	if (!req.headers || !req.headers.authorization) {
		res.status(401).json({ success: false, message: 'Invalid token' })
		return
	}

	const authorizationType = req.headers.authorization.split(' ')[0]
	const authorizationToken = req.headers.authorization.split(' ')[1]

	if (authorizationType !== 'Bearer' || !authorizationToken) {
		res.status(401).json({ success: false, message: 'Invalid token' })
		return
	}

	// check if the provided jwt is valid
	let decoded
	try {
		decoded = jwt.verify(authorizationToken, JSON_WEBTOKEN_SECRET)
	} catch (err) {
		res.status(401).json({ success: false, message: 'Invalid token' })
		return
	}

	let userQuery
	try {
		userQuery = await UserModel.findOne({ _id: decoded.userid }).exec()
	} catch (err) {
		res.status(500).json({ success: false, message: 'Internal server error' })
		return
	}

	if (!userQuery || userQuery.deleted) {
		res.status(401).json({ success: false, message: 'User does not exist' })
		return
	}

	next()
}

export const hasValidAdminTokenInHeader = async (req, res, next) => {
	if (!req.headers || !req.headers.authorization) {
		res.status(401).json({ success: false, message: 'Invalid token' })
		return
	}

	const authorizationType = req.headers.authorization.split(' ')[0]
	const authorizationToken = req.headers.authorization.split(' ')[1]

	if (authorizationType !== 'Bearer' || !authorizationToken) {
		res.status(401).json({ success: false, message: 'Invalid token' })
		return
	}

	// check if the provided jwt is valid
	let decoded
	try {
		decoded = jwt.verify(authorizationToken, JSON_WEBTOKEN_SECRET)
	} catch (err) {
		res.status(401).json({ success: false, message: 'Invalid token' })
		return
	}

	let userQuery
	try {
		userQuery = await UserModel.findOne({ _id: decoded.userid }).exec()
	} catch (err) {
		res.status(500).json({ success: false, message: 'Internal server error' })
		return
	}

	if (!userQuery || userQuery.deleted) {
		res.status(401).json({ success: false, message: 'User does not exist' })
		return
	}

	if (userQuery.rightsLayer < 1) {
		res
			.status(401)
			.json({ success: false, message: 'You need to be an admin for that' })
		return
	}

	next()
}