import { useLocation, Link } from 'react-router-dom'
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
	const [products, setProducts] = useState([])

	const location = useLocation()

	useEffect(() => {
		fetch('https://fakestoreapi.com/products')
			.then(res => res.json())
			.then(json => setProducts(json))
	})

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
				if (!res.success) setIsLoggedIn(false)
				else {
					setUserData(res.user)
					setIsLoggedIn(true)
				}
			})
			.catch(err => console.error(err))
	}, [isLoggedIn])

	return (
		<>
			<Nav userData={userData} location={location} />
			<Router
				isLoggedIn={isLoggedIn}
				setIsLoggedIn={setIsLoggedIn}
				userData={userData}
				products={products}
				cart={cart}
			/>
			<Link to='/shoppingCart'>
				<CartButton cart={cart} />
			</Link>
			<Footer userData={userData} location={location} />
		</>
	)
}

export default App