import { Switch, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'

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
	const [userData, setUserData] = useState({})

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
				if (!res.success) isLoggedIn(false)
				else {
					setUserData(res.user)
					setIsLoggedIn(true)
				}
			})
			.catch(err => console.error(err))
	}, [isLoggedIn])

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