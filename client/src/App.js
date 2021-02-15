import { useState, useEffect } from 'react'

import CartButton from './components/CartButton'
import Footer from './components/Footer'
import Nav from './components/Nav'

import Router from './router/routes'

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
			<Nav userData={userData} />
			<CartButton cart={cart} />
			<Router
				isLoggedIn={isLoggedIn}
				setIsLoggedIn={setIsLoggedIn}
				userData={userData}
			/>
			<Footer userData={userData} />
		</>
	)
}

export default App