import { validate as validateEmail } from 'email-validator'

export const hasValidPostBody = (req, res, next) => {
	if (!req.body || !Object.keys(req.body).length) {
		res.status(400).json({ success: false, message: 'No valid body supplied' })
	} else next()
}

export const hasValidEmailInBody = (req, res, next) => {
	const { email } = req.body
	if (!validateEmail(email)) {
		res.status(400).json({
			success: false,
			message: 'The entered email address is invalid',
		})
	} else next()
}

export const hasValidPasswordInBody = (req, res, next) => {
	const { password } = req.body
	if (!password || password.length < 7) {
		res.status(400).json({
			success: false,
			message: 'The entered password is not strong enough',
		})
	} else next()
}