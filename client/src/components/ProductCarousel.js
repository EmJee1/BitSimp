import { useState, useEffect } from 'react'

import rightPointingHand from '../images/hand-point-right-solid.svg'
import laptopImage from '../images/laptop.png'
import chevronRight from '../images/chevron-right-solid.svg'
import chevronLeft from '../images/chevron-left-solid.svg'

const ProductCarousel = () => {
	const [products, setProducts] = useState([])

	useEffect(() => {
		fetch('https://fakestoreapi.com/products')
			.then(res => res.json())
			.then(json => setProducts(json))
	})

	return (
		<div className='product-carousel container'>
			<div className='product-carousel-controls-wrap'>
				<ul className='product-carousel-controls'>
					<li>
						<img src={chevronLeft} alt='Chevron left icon' />
					</li>
					<li>
						<img src={chevronRight} alt='Chevron right icon' />
					</li>
				</ul>
			</div>
			<h2 className='font-lg font-bold green'>
				Bestsellers
				<img src={rightPointingHand} alt='Right pointing hand icon' />
			</h2>
			<div className='product-carousel-wrap'>
				{products.map((obj, index) => (
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
	)
}

export default ProductCarousel