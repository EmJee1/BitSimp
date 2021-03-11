import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

import Alert from '../Alert'

const AdminEditProductModal = ({
	showModal,
	isNewProduct,
	productId,
	setShowModal,
}) => {
	const [product, setProduct] = useState({})
	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')
	const [image, setImage] = useState({})
	const [error, setError] = useState('')

	const handleBackdrop = e => {
		if (e.target.classList.contains('bitsimp-modal-outer')) setShowModal(false)
	}

	const handleSubmit = e => {
		e.preventDefault()
		setError('')

		if (!showModal) {
			setError('Onverwachtse fout, probeer a.u.b. opnieuw')
			return
		}

		if (!title || title.length < 3) {
			setError('De producttitel moet tenmiste 3 karakters lang zijn')
			return
		}

		const formData = new FormData()
		formData.append('title', title)
		formData.append('description', description)

		if (image && image.name) {
			if (image.type.split('/')[0] !== 'image') {
				setError("Alleen foto's kunnen worden geüpload")
				return
			}
			formData.append('product-image', image)
		}

		fetch(`http://localhost:8000/products/addProduct`, {
			method: 'POST',
			body: formData,
			headers: {
				Authorization: `Bearer ${localStorage.getItem('jwtoken')}`,
			},
		})
			.then(res => {
				console.log(res)
				if (!res.success) {
					setError(res.message)
					return
				}
			})
			.catch(err => setError(err.message))
	}

	useEffect(() => {
		setError('')
		if ((!productId && !isNewProduct) || isNewProduct) {
			setProduct({})
			return
		}

		fetch(`http://localhost:8000/products/getProductById?id=${productId}`)
			.then(res => {
				console.log(res)
			})
			.catch(err => setError(err.message))
	}, [showModal, isNewProduct, productId])

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
						initial={{ x: '-100vw' }}
						animate={{ x: 0 }}
						exit={{ x: '100vw' }}
					>
						<form onSubmit={handleSubmit}>
							<div className='bitsimp-modal-head'>
								<h2>{isNewProduct ? 'New' : 'Edit'} product</h2>
								{error && <Alert type='danger' text={error} />}
							</div>
							<div className='bitsimp-modal-content'>
								<div className='row'>
									<div className='col-12 col-md-6 mx-auto mt-4'>
										<label htmlFor='product-title'>Producttitel</label>
										<input
											type='text'
											id='product-title'
											className='primary-input w-100'
											onChange={e => setTitle(e.target.value)}
										/>
										<label htmlFor='product-images' className='mt-2'>
											Productfoto's
										</label>
										<input
											type='file'
											id='product-images'
											onChange={e => setImage(e.target.files[0])}
										/>
									</div>
									<div className='col-12 col-md-6 mt-4'>
										<label htmlFor='product-description'>
											Productbeschrijving
										</label>
										<textarea
											id='product-description'
											className='w-100 primary-input'
											rows='6'
											onChange={e => setDescription(e.target.value)}
										></textarea>
									</div>
								</div>
							</div>
							<div className='bitsimp-modal-footer'>
								<button type='submit' className='btn btn-secondary-hover'>
									Save
								</button>
								<button
									className='btn btn-red'
									type='button'
									onClick={() => setShowModal(false)}
								>
									Cancel
								</button>
							</div>
						</form>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	)
}

export default AdminEditProductModal
