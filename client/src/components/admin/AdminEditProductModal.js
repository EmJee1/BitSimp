import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const AdminEditProductModal = ({
	showModal,
	isNewProduct,
	productId,
	setShowModal,
}) => {
	const [product, setProduct] = useState({})

	const handleBackdrop = e => {
		if (e.target.classList.contains('bitsimp-modal-outer')) setShowModal(false)
	}

	useEffect(() => {
		if ((!productId && !isNewProduct) || isNewProduct) {
			setProduct({})
			return
		}

		fetch(`http://localhost:8000/products/getProductById?id=${productId}`)
			.then(res => {
				console.log(res)
			})
			.catch(err => console.error(err))
	}, [showModal, isNewProduct, productId])

	// ! check for modalShown before submitting form, to prevent submissions while modal is closed

	return (
		<AnimatePresence exitBeforeEnter>
			{showModal && (
				<motion.div
					className='bitsimp-modal-outer'
					onClick={handleBackdrop}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
				>
					<motion.div
						className='bitsimp-modal-inner'
						initial={{ y: '-100vh' }}
						animate={{ y: 0 }}
						exit={{ y: '-100vh' }}
					>
						<div className='bitsimp-modal-head'>
							<h2>{isNewProduct ? 'New' : 'Edit'} product</h2>
						</div>
						<div className='bitsimp-modal-content'>
							<div className='row'>
								<div className='col-12 col-md-6 mx-auto mt-4'>
									<label htmlFor='product-title'>Producttitel</label>
									<input
										type='text'
										id='product-title'
										className='primary-input w-100'
									/>
									<label htmlFor='product-images' className='mt-2'>Productfoto's</label>
									<input type='file' id='product-images' />
								</div>
								<div className='col-12 col-md-6 mt-4'>
									<label htmlFor='product-description'>
										Productbeschrijving
									</label>
									<textarea
										id='product-description'
										className='w-100 primary-input'
										rows='6'
									></textarea>
								</div>
							</div>
						</div>
						<div className='bitsimp-modal-footer'>
							<button className='btn btn-secondary-hover'>Save</button>
							<button
								className='btn btn-red'
								onClick={() => setShowModal(false)}
							>
								Cancel
							</button>
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	)
}

export default AdminEditProductModal
