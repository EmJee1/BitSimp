import bannerImage from '../images/registerBanner.jpg'
import CTAbanner from '../components/CTAbanner'
import USPs from '../components/USPs'
import LoginForm from '../components/LoginForm'

const RegisterPage = ({ isLoggedIn, SetIsLoggedIn }) => {
	return (
		<>
			<CTAbanner
				backgroundImage={bannerImage}
				title='Ontdenk accountvoordelen van BitSimp'
				description='In uw BitSimp account heeft u gemakkelijk toegang tot al uw bestellingen, en de beste service'
				showButton={false}
			/>
			<USPs />
			<div className='container mt-5'>
				<div className='row'>
					<div className='col-12 col-sm-8 col-md-6 col-xl-4 mx-auto'>
						<LoginForm />
					</div>
				</div>
			</div>
		</>
	)
}

export default RegisterPage