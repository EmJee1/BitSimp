import bannerImage from '../images/registerBanner.jpg'
import RegisterForm from '../components/forms/RegisterForm'
import LoginForm from '../components/forms/LoginForm'
import CTAbanner from '../components/CTAbanner'
import USPs from '../components/USPs'

import { useState, useEffect } from 'react'

const RegisterPage = ({ isLoggedIn, setIsLoggedIn }) => {
	const [loggingIn, setLoggingIn] = useState(true)

	useEffect(() => {
		const fetchData = async () => {
			return await (
				await fetch('http://localhost:8000/users/getInfoById', {
					headers: {
						Authorization: `Bearer ${localStorage.getItem('jwtoken')}`,
					},
				})
			).json()
		}
		fetchData()
			.then(res => {
				console.log(res)
			})
			.catch(err => console.error(err))
	}, [])

	return (
		<>
			<CTAbanner
				backgroundImage={bannerImage}
				title='Ontdek accountvoordelen van BitSimp'
				description='In uw BitSimp account heeft u gemakkelijk toegang tot al uw bestellingen, en de beste service'
				showButton={false}
			/>
			<USPs />

			<div className='container mt-5'>
				<div className='row'>
					{!isLoggedIn && (
						<div className='col-12 col-sm-8 col-md-6 col-xl-4 mx-auto'>
							{loggingIn && (
								<LoginForm
									setIsLoggedIn={setIsLoggedIn}
									setLoggingIn={setLoggingIn}
								/>
							)}
							{!loggingIn && <RegisterForm setLoggingIn={setLoggingIn} />}
						</div>
					)}
				</div>
			</div>
		</>
	)
}

export default RegisterPage
