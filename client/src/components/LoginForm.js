import { validate as validateEmail } from 'email-validator'
import { useState, useRef } from 'react'

const LoginForm = () => {
	const [login, setLogin] = useState(true)
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const loginEmailRef = useRef(null)

	const handleLoginEmail = e => {
		setEmail(e.target.value)
		if (!validateEmail(e.target.value))
			loginEmailRef.current.style.borderColor = '#eb0400'
		else loginEmailRef.current.style.borderColor = '#27ae60'
	}

	return (
		<div>
			<form>
				{login && (
					<>
						<label htmlFor='login-email'>Emailadres</label>
						<input
							type='email'
							id='login-email'
							className='primary-input mb-3 mt-1 w-100'
							ref={loginEmailRef}
							onChange={handleLoginEmail}
						/>
						<label htmlFor='login-password'>Wachtwoord</label>
						<input
							type='password'
							id='login-password'
							className='primary-input mt-1 w-100'
							onChange={e => setPassword(e.target.value)}
						/>
					</>
				)}
			</form>
		</div>
	)
}

export default LoginForm