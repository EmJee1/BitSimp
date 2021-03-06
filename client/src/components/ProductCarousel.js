import { useRef } from 'react'

import rightPointingHand from '../images/hand-point-right-solid.svg'
import chevronRight from '../images/chevron-right-solid.svg'
import chevronLeft from '../images/chevron-left-solid.svg'

const ProductCarousel = ({ title, products }) => {
	const carouselWrapRef = useRef(null)

	const handleCarouselButton = scrollRight => {
		let newLeftLocation = carouselWrapRef.current.scrollLeft
		if (scrollRight) newLeftLocation += 600
		else newLeftLocation -= 600

		carouselWrapRef.current.scrollTo({
			left: newLeftLocation,
			behaviour: 'smooth',
		})
	}

	return (
		<div className='product-carousel container'>
			<div className='row'>
				<div className='col-12 col-md-10 mx-auto'>
					<div className='product-carousel-controls-wrap'>
						<ul className='product-carousel-controls'>
							<li onClick={() => handleCarouselButton(false)}>
								<img src={chevronLeft} alt='Chevron left icon' />
							</li>
							<li onClick={() => handleCarouselButton(true)}>
								<img src={chevronRight} alt='Chevron right icon' />
							</li>
						</ul>
					</div>
					<h2 className='font-lg font-bold green'>
						{title}
						<img src={rightPointingHand} alt='Right pointing hand icon' />
					</h2>
					<div className='product-carousel-wrap' ref={carouselWrapRef}>
						{products.map(obj => (
							<div className='product-carousel-item' key={obj.id}>
								<div className='product-carousel-image'>
									<img src={obj.image} alt='Product preview' />
								</div>
								<h5 className='font-md font-regular green'>{obj.title}</h5>
								<p className='font-xs font-light red'>{obj.price}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProductCarousel