import { Switch, Route } from 'react-router-dom'

import ShoppingCartPage from '../pages/ShoppingCartPage'
import AssortmentPage from '../pages/AssortmentPage'
import AccountPage from '../pages/AccountPage'
import AdminPage from '../pages/AdminPage'
import HomePage from '../pages/HomePage'

const Router = ({ isLoggedIn, setIsLoggedIn, userData, products, cart }) => {
	return (
		<>
			<Switch>
				<Route path='/' exact>
					<HomePage products={products} />
				</Route>
				<Route path='/assortiment' exact>
					<AssortmentPage />
				</Route>
				<Route path='/account' exact>
					<AccountPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
				</Route>
				<Route path='/admin' exact>
					<AdminPage
						userData={userData}
						isLoggedIn={isLoggedIn}
						products={products}
					/>
				</Route>
				<Route path='/shoppingCart' exact>
					<ShoppingCartPage cart={cart} />
				</Route>
			</Switch>
		</>
	)
}

export default Router