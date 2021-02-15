import { Link } from 'react-router-dom'

const Nav = ({ userData }) => {
	return (
		<nav className='navbar navbar-expand-lg main-nav bg-green'>
			<div className='container'>
				<Link className='navbar-brand font-extra-bold white font-xl' to='/'>
					BitSimp
				</Link>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navMarkup'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navMarkup'>
					<hr className='bg-white' />
					<div className='navbar-nav font-bold font-xmd'>
						<Link className='nav-link active' to='/'>
							Home
						</Link>
						<Link className='nav-link' to='/assortiment'>
							Assortiment
						</Link>
						<Link className='nav-link' to='/register'>
							Account
						</Link>
						{userData.rightsLayer === 2 && (
							<Link className='nav-link' to='/admin'>
								Admin
							</Link>
						)}
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Nav