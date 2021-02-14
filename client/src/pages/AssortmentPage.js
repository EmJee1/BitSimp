import bannerImage from '../images/assortmentPage.png'
import CTAbanner from '../components/CTAbanner'
import USPs from '../components/USPs'

const AssortmentPage = () => {
	return (
		<>
			<CTAbanner
				backgroundImage={bannerImage}
				title='Advies op maat'
				description='Heeft u toch nog vragen, breng dan gerust een bezoek aan onze winkel in Dedemsvaart'
			/>
			<USPs />
			<div className='products-page-wrap'>
				<div className='container'>
					<div className='row'>
						<div className='col-12 col-md-3'>
							<div className='product-page-controls'>
								<input
									type='text'
									className='primary-input search-input'
									placeholder='Zoek naar producten...'
								/>
							</div>
						</div>
						<div className='col-12 col-md-6'></div>
					</div>
				</div>
			</div>
		</>
	)
}

export default AssortmentPage