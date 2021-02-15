import shoppingBasketIcon from '../images/shopping-basket-solid.svg'
import cartIcon from '../images/shopping-cart-solid.svg'
import { motion } from 'framer-motion'

const basketImageMotion = {
	initial: {
		x: -80,
	},
	hover: {
		x: 20,
		transition: {
			duration: 0.6,
			type: 'spring',
		},
	},
}

const cartImageMotion = {
	initial: {
		x: -20,
	},
	hover: {
		x: 80,
		transition: {
			duration: 0.8,
			type: 'spring',
		},
	},
}

const CartButton = ({ cart }) => {
	return (
		<div className='floating-cart-button-wrap'>
			<div className='floating-cart-button-indicator font-bold'>
				{cart.length && cart.length}
			</div>
			<motion.div
				className='floating-cart-button'
				initial='initial'
				whileHover='hover'
			>
				<motion.img
					variants={basketImageMotion}
					src={shoppingBasketIcon}
					alt='Shopping basket icon'
				/>
				<motion.img variants={cartImageMotion} src={cartIcon} alt='Cart icon' />
			</motion.div>
		</div>
	)
}

export default CartButton