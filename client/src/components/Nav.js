import { Link } from 'react-router-dom'

const Nav = () => {
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
					<div className='navbar-nav font-bold font-lg'>
						<Link className='nav-link active' to='/'>
							Home
						</Link>
						<Link className='nav-link' to='/assortiment'>
							Assortiment
						</Link>
						<Link className='nav-link' to='/register'>
							Account
						</Link>
						<Link className='nav-link' to='/'>
							Contact
						</Link>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Nav