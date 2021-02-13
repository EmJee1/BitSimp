import rightPointingHand from '../images/hand-point-right-solid.svg'
import laptopImage from '../images/laptop.png'

const ProductCarousel = () => {
	return (
		<div className='product-carousel container'>
			<h2 className='font-lg font-bold green'>
				Bestsellers
				<img src={rightPointingHand} alt='Right pointing hand icon' />
			</h2>
			<div className='product-carousel-wrap'>
				<div className='product-carousel-item'>
					<img src={laptopImage} alt='Lenovo laptop' />
					<h5 className='font-md font-regular green'>Lenovo Ideapad S370</h5>
					<p className='font-xs font-light red'>589,00-</p>
				</div>
				<div className='product-carousel-item'>
					<img src={laptopImage} alt='Lenovo laptop' />
					<h5 className='font-md font-regular green'>Lenovo Ideapad S370</h5>
					<p className='font-xs font-light red'>589,00-</p>
				</div>
				<div className='product-carousel-item'>
					<img src={laptopImage} alt='Lenovo laptop' />
					<h5 className='font-md font-regular green'>Lenovo Ideapad S370</h5>
					<p className='font-xs font-light red'>589,00-</p>
				</div>
			</div>
		</div>
	)
}

export default ProductCarousel