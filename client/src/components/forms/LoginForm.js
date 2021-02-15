import { useState } from 'react'
import Alert from '../Alert'

const LoginForm = ({ setLoggingIn, setIsLoggedIn }) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [dangerAlert, setDangerAlert] = useState('')
	const [successAlert, setSuccessAlert] = useState('')

	const handleSubmit = async e => {
		e.preventDefault()
		setDangerAlert('')

		const data = await (
			await fetch('http://localhost:8000/auth/login', {
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
		localStorage.setItem('jwtoken', data.token)
		setIsLoggedIn(true)
	}

	return (
		<div>
			<h3 className='font-regular mb-4'>Inloggen</h3>
			<form onSubmit={handleSubmit}>
				{dangerAlert && <Alert type='danger' text={dangerAlert} />}
				{successAlert && <Alert type='success' text={successAlert} />}
				<label htmlFor='login-email'>Emailadres</label>
				<input
					type='email'
					id='login-email'
					className='primary-input mb-3 mt-1 w-100'
					placeholder='iemand@voorbeeld.nl'
					onChange={e => setEmail(e.target.value)}
				/>
				<label htmlFor='login-password'>Wachtwoord</label>
				<input
					type='password'
					id='login-password'
					placeholder='&#9679;'
					className='primary-input mb-3 mt-1 w-100'
					onChange={e => setPassword(e.target.value)}
				/>
				<div className='d-flex justify-content-between align-items-end'>
					<input
						type='submit'
						value='Inloggen'
						className='btn btn-secondary-hover inline'
					/>
					<p className='mb-0 black pointer' onClick={() => setLoggingIn(false)}>
						Registreren
					</p>
				</div>
			</form>
		</div>
	)
}

export default LoginForm