import { Switch, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Nav from './components/Nav'
import './style/index.scss'

const App = () => {
	return (
		<div className='App'>
			<Nav />
			<Switch>
				<Route path='/' exact>
					<HomePage />
				</Route>
			</Switch>
		</div>
	)
}

export default App