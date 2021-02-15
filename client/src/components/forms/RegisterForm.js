import { validate as validateEmail } from 'email-validator'
import { useState, useRef } from 'react'
import Alert from '../Alert'

const RegisterForm = ({ setLoggingIn }) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [repeatPassword, setRepeatPassword] = useState('')
	const [dangerAlert, setDangerAlert] = useState('')
	const [successAlert, setSuccessAlert] = useState('')

	const registerEmailRef = useRef(null)
	const registerPasswordRef = useRef(null)
	const repeatRegisterPasswordRef = useRef(null)

	const handleEmail = e => {
		setEmail(e.target.value)
		setDangerAlert('')
		if (!validateEmail(e.target.value))
			registerEmailRef.current.style.borderColor = '#eb0400'
		else registerEmailRef.current.style.borderColor = '#27ae60'
	}

	const handlePassword = e => {
		setPassword(e.target.value)
		setDangerAlert('')
		if (e.target.value.length < 7)
			registerPasswordRef.current.style.borderColor = '#eb0400'
		else registerPasswordRef.current.style.borderColor = '#27ae60'
	}

	const handleRepeatPassword = e => {
		setRepeatPassword(e.target.value)
		setDangerAlert('')
		if (e.target.value !== password)
			repeatRegisterPasswordRef.current.style.borderColor = '#eb0400'
		else repeatRegisterPasswordRef.current.style.borderColor = '#27ae60'
	}

	const handleSubmit = async e => {
		e.preventDefault()
		setDangerAlert('')

		if (!validateEmail(email)) {
			setDangerAlert('Het ingevulde mailadres is niet correct')
			return
		}

		if (password.length < 7) {
			setDangerAlert('Een wachtwoord moet minstens 7 tekens bevatten')
			return
		}

		if (password !== repeatPassword) {
			setDangerAlert(
				'Het heraalde wachtwoord komt niet overeen met het wachtwoord'
			)
			return
		}

		const data = await (
			await fetch('http://localhost:8000/auth/signup', {
				method: 'post',
				body: JSON.stringify({ email, password }),
				headers: { 'Content-Type': 'application/json' },
			})
		).json()
		if (!data.success) {
			setDangerAlert(data.message)
			return
		}

		setSuccessAlert(data.message)
	}

	return (
		<div>
			<h3 className='font-regular mb-4'>Registreren</h3>
			<form onSubmit={handleSubmit}>
				{dangerAlert && <Alert type='danger' text={dangerAlert} />}
				{successAlert && <Alert type='success' text={successAlert} />}
				<label htmlFor='register-email'>Emailadres</label>
				<input
					type='email'
					id='register-email'
					className='primary-input mb-3 mt-1 w-100'
					placeholder='iemand@voorbeeld.nl'
					ref={registerEmailRef}
					onChange={handleEmail}
				/>
				<label htmlFor='register-password'>Wachtwoord</label>
				<input
					type='password'
					id='register-password'
					className='primary-input mb-3 mt-1 w-100'
					ref={registerPasswordRef}
					onChange={handlePassword}
				/>
				<label htmlFor='register-repeat-password'>Wachtwoord herhalen</label>
				<input
					type='password'
					id='register-repeat-password'
					className='primary-input mb-3 mt-1 w-100'
					ref={repeatRegisterPasswordRef}
					onChange={handleRepeatPassword}
				/>
				<div className='d-flex justify-content-between align-items-end'>
					<input
						type='submit'
						value='Registreren'
						className='btn btn-secondary-hover inline'
					/>
					<p className='mb-0 black pointer' onClick={() => setLoggingIn(true)}>
						Inloggen
					</p>
				</div>
			</form>
		</div>
	)
}

export default RegisterForm