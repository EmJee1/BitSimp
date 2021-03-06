import { Link } from 'react-router-dom'

const Footer = ({ userData, location }) => {
	const pathname = location.pathname

	return (
		<footer className='main-footer'>
			<div className='container'>
				<hr />
				<div className='inner-footer row black'>
					<div className='col-6 font-bold font-md'>
						<Link className={`nav-link ${pathname === '/' ? 'active' : ''}`} to='/'>
							Home
						</Link>
						<Link className='nav-link' to='/assortiment'>
							Assortiment
						</Link>
						<Link className='nav-link' to='/account'>
							Account
						</Link>
						{userData.rightsLayer === 2 && (
							<Link className='nav-link' to='/admin'>
								Admin
							</Link>
						)}
					</div>
					<div className='col-6 font-sm'>
						<address>
							Rollepaal 36
							<br />
							7701 BS Dedemsvaart
							<br />
							<br />
							T: 06-39529535
							<br />
							E: info@bitsimp.nl
							<br />
						</address>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer