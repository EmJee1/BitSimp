import bannerImage from '../images/adminBanner.jpg'

import AdminEditProductModal from '../components/admin/AdminEditProductModal'
import CTAbanner from '../components/CTAbanner'

import { useHistory } from 'react-router-dom'
import { useState } from 'react'

const AdminPage = ({ isLoggedIn, userData, products }) => {
	const [amountOfShownProducts, setAmountOfShownProducts] = useState(10)
	const [showModal, setShowModal] = useState(false)
	const history = useHistory()

	if (userData.rightsLayer !== 2 || !isLoggedIn) history.push('/')

	return (
		<>
			<AdminEditProductModal
				isNewProduct={true}
				showModal={showModal}
				setShowModal={setShowModal}
			/>
			<CTAbanner
				backgroundImage={bannerImage}
				title='Gemakkelijk beheer van uw webshop'
				description='Hier heeft u een gemakkelijk overzicht van alle activiteiten en producten op uw webshop'
				showButton={false}
			/>
			<div className='container mt-5'>
				<h2 className='mb-4'>Webshopbeheer</h2>
				<div className='row'>
					<div className='col-12 col-md-6'>
						<div className='d-flex justify-content-between'>
							<h5>Producten</h5>
							<p
								className='pointer green underline'
								onClick={() => setShowModal(true)}
							>
								Add a product
							</p>
						</div>
						<div className='admin-products-overview'>
							{products.slice(0, amountOfShownProducts).map(obj => (
								<div className='product' key={obj.id}>
									<p>{obj.title}</p>
								</div>
							))}
						</div>
						{amountOfShownProducts < products.length && (
							<p
								onClick={() =>
									setAmountOfShownProducts(amountOfShownProducts + 5)
								}
								className='btn btn-secondary-hover'
							>
								Show more items
							</p>
						)}
					</div>
					<div className='col-12 col-md-6'>
						<h5>Klanten</h5>
						<div className='admin-products-overview'></div>
					</div>
				</div>
			</div>
		</>
	)
}

export default AdminPage