import UserModel from '../database/models/user.model.js'
import jwt from 'jsonwebtoken'

const { JSON_WEBTOKEN_SECRET } = process.env

export const getUserInfoByToken = async (req, res) => {
	const authorizationToken = req.headers.authorization.split(' ')[1]

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
		userQuery = await UserModel.findOne({ _id: decoded.userid })
			.select('-password -rightsLayer')
			.exec()
	} catch (err) {
		res.status(500).json({ success: false, message: 'Internal server error' })
		return
	}

	res.status(200).json({ success: true, user: userQuery })
}