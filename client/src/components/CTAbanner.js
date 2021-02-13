import { Link } from 'react-router-dom'

const CTAbanner = ({ backgroundImage, title, description }) => {
	return (
		<div
			className='container-fluid cta-banner'
			style={{ backgroundImage: `url('${backgroundImage}')` }}
		>
			<div className='container cta-banner-contents'>
				<h1 className='font-lg font-bold silver'>{title}</h1>
				<p className='font-sm font-regular white'>{description}</p>
				<Link to='/assortiment' className='btn'>
					Bekijk ons assortiment
				</Link>
			</div>
		</div>
	)
}

export default CTAbanner