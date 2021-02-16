import bannerImage from '../images/shoppingCartBanner.jpg'
import CTAbanner from '../components/CTAbanner'
import USPs from '../components/USPs'

const ShoppingCartPage = ({ cart }) => {
	return (
		<>
			<CTAbanner
				backgroundImage={bannerImage}
				title='Uw winkelwagentje'
				description='Bekijk gemakkelijk uw factuur, en betaal met iDeal, paypal of creditcard'
				showButton={false}
			/>
			<USPs />
			<div className='container mt-5'>
				<div className='row'>
					<div className='col-12'>
						<h2>Shopping cart</h2>
					</div>
				</div>
			</div>
		</>
	)
}

export default ShoppingCartPage