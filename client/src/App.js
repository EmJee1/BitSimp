import { Switch, Route } from 'react-router-dom'
import assortmentPage from './pages/AssortmentPage'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import Nav from './components/Nav'
import './style/index.scss'
import AssortmentPage from './pages/AssortmentPage'

const App = () => {
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
			</Switch>
			<Footer />
		</>
	)
}

export default App