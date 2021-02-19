import { motion, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

const AdminEditProductModal = ({ isNewProduct, productId }) => {
	const [modalShown, setModalShown] = useState(false)
	const [product, setProduct] = useState({})
	const modalRef = useRef(null)

	const handleHideModal = () => setModalShown(false)

	const handleBackdrop = e => {
		if (e.target.classList.contains('bitsimp-modal-outer')) handleHideModal()
	}

	useEffect(() => {
		if (!productId || isNewProduct) {
			setProduct({})
			return
		}

		fetch(`http://localhost:8000/products/getProductById?id=${productId}`)
			.then(res => {
				console.log(res)
			})
			.catch(err => console.error(err))
	}, [productId, isNewProduct])

	return (
		<AnimatePresence exitBeforeEnter>
			{modalShown && (
				<motion.div
					className='bitsimp-modal-outer'
					ref={modalRef}
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
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
								numquam necessitatibus illum.
							</p>
						</div>
						<div className='bitsimp-modal-footer'>
							<button className='btn btn-secondary-hover'>Save</button>
							<button className='btn btn-red' onClick={handleHideModal}>
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