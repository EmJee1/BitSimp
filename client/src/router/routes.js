import { Switch, Route } from 'react-router-dom'

import AssortmentPage from '../pages/AssortmentPage'
import AccountPage from '../pages/AccountPage'
import AdminPage from '../pages/AdminPage'
import HomePage from '../pages/HomePage'

const Router = ({ isLoggedIn, setIsLoggedIn, userData }) => {
	return (
		<>
			<Switch>
				<Route path='/' exact>
					<HomePage />
				</Route>
				<Route path='/assortiment' exact>
					<AssortmentPage />
				</Route>
				<Route path='/register' exact>
					<AccountPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
				</Route>
				<Route path='/admin' exact>
					<AdminPage userData={userData} />
				</Route>
			</Switch>
		</>
	)
}

export default Router