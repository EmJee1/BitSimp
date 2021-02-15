import { Switch, Route } from 'react-router-dom'
import { useState } from 'react'

import AssortmentPage from './pages/AssortmentPage'
import CartButton from './components/CartButton'
import AccountPage from './pages/AccountPage'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import Nav from './components/Nav'

import './style/index.scss'

const App = () => {
	const [cart, setCart] = useState([])
	const [isLoggedIn, setIsLoggedIn] = useState(false)

	return (
		<>
			<Nav />
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
			</Switch>
			<CartButton cart={cart} />
			<Footer />
		</>
	)
}

export default App