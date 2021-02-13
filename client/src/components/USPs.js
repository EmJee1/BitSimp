import award from '../images/award-solid.svg'
import store from '../images/store-alt-solid.svg'
import delivery from '../images/truck-loading-solid.svg'

const USPs = () => {
	return (
		<div className='usps bg-white'>
			<div className='container'>
				<div className='usp-item black'>
					<img src={delivery} alt='Delivery icon' />
					<h5 className='font-md font-bold'>Gratis bezorging vanaf 50,-</h5>
				</div>
				<div className='usp-item black'>
					<img src={award} alt='Award icon' />
					<h5 className='font-md font-bold'>Beste webwinkel 2020</h5>
				</div>
				<div className='usp-item black'>
					<img src={store} alt='Store icon' />
					<h5 className='font-md font-bold'>
						Onze eigen winkel in Dedemsvaart
					</h5>
				</div>
			</div>
		</div>
	)
}

export default USPs