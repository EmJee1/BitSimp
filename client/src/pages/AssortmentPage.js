import sortAmountDown from '../images/sort-amount-down-alt-solid.svg'
import sortAmountUp from '../images/sort-amount-up-alt-solid.svg'
import bannerImage from '../images/assortmentPage.png'
import CTAbanner from '../components/CTAbanner'
import USPs from '../components/USPs'

import { useState } from 'react'

const AssortmentPage = () => {
	const [sortLowToHigh, setSortLowToHigh] = useState(false)

	return (
		<>
			<CTAbanner
				backgroundImage={bannerImage}
				title='Advies op maat'
				description='Heeft u toch nog vragen, breng dan gerust een bezoek aan onze winkel in Dedemsvaart'
				showButton={false}
			/>
			<USPs />
			<div className='products-page-wrap'>
				<div className='container'>
					<div className='row'>
						<div className='col-12 col-md-3'>
							<div className='product-page-controls'>
								<input
									type='text'
									id='product-search'
									className='primary-input search-input'
									placeholder='Zoek naar producten...'
								/>
								<button>
									<img
										src={sortLowToHigh ? sortAmountUp : sortAmountDown}
										onClick={() => setSortLowToHigh(!sortLowToHigh)}
										alt='Sorting icon'
									/>
								</button>
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