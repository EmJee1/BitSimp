const { GOOGLE_CLIENT_ID } = process.env

import { OAuth2Client } from 'google-auth-library'
const client = new OAuth2Client(GOOGLE_CLIENT_ID)

import UserModel from '../database/models/user.model.js'
import jwt from 'jsonwebtoken'

const { JSON_WEBTOKEN_SECRET } = process.env

export const signupController = async (req, res) => {
	const { email, password } = req.body

	let userQuery
	try {
		userQuery = await UserModel.findOne({ email }).exec()
	} catch (err) {
		res.status(500).json({ success: false, message: err })
	}

	if (userQuery) {
		res.status(409).json({
			success: false,
			message: 'A user with that mail already registered',
		})
		return
	}

	const userDetails = { email, password, isGoogleUser: false }
	const newUser = new UserModel(userDetails)

	try {
		await newUser.save()
		res
			.status(201)
			.json({ success: true, message: 'User created successfully' })
		return
	} catch (err) {
		res.status(500).json({ success: false, message: err.message })
		return
	}
}

export const loginController = async (req, res) => {
	const { email, password } = req.body

	let userQuery
	try {
		userQuery = await UserModel.findOne({ email }).exec()
	} catch (err) {
		res.status(500).json({ success: false, message: err })
	}

	if (!userQuery) {
		res.status(401).json({
			success: false,
			message: 'That user and password combination incorrect',
		})
		return
	}

	if (userQuery.isGoogleUser) {
		res.status(401).json({
			success: false,
			message: 'Please sign in using Google',
		})
		return
	}

	if (!userQuery.isValidPassword(password)) {
		res.status(401).json({
			success: false,
			message: 'That user and password combination incorrect',
		})
		return
	}

	// signing a new jwtoken
	const token = jwt.sign({ userid: userQuery._id }, JSON_WEBTOKEN_SECRET, {
		expiresIn: '1h',
	})

	res
		.status(200)
		.json({ success: true, message: 'User logged in successfully', token })
}

export const googleLoginController = async (req, res) => {
	const { token } = req.body

	const ticket = await client.verifyIdToken({
		idToken: token,
		audience: GOOGLE_CLIENT_ID,
	})

	const { email } = ticket.getPayload()

	if (!email) {
		res.status(401).json({
			success: false,
			message: 'Error with google',
		})
	}

	let userQuery
	try {
		userQuery = await UserModel.findOne({ email }).exec()
	} catch (err) {
		res.status(500).json({ success: false, message: err })
	}

	if (userQuery) {
		res.status(409).json({
			success: false,
			message: 'A user with that mail already registered',
		})
		return
	}

	const userDetails = { email, isGoogleUser: true }
	const newUser = new UserModel(userDetails)

	try {
		await newUser.save()
		res
			.status(201)
			.json({
				success: true,
				message: 'User created successfully',
				data: email,
			})
		return
	} catch (err) {
		res.status(500).json({ success: false, message: err.message })
		return
	}
}
