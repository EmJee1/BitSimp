import bannerImage from '../images/tanner-van-dera-oaQ2mTeaP7o-unsplash.jpg'
import ProductCarousel from '../components/ProductCarousel'
import CTAbanner from '../components/CTAbanner'
import USPs from '../components/USPs'

const HomePage = () => {
	return (
		<>
			<CTAbanner
				backgroundImage={bannerImage}
				title='Moeite met thuiswerken?'
				description='Bij BitSimp helpen we u met het uitzoeken van geschikte appraratuur'
			/>
			<USPs />
			<ProductCarousel title='Bestsellers' />
			<ProductCarousel title='Newcomers' />
		</>
	)
}

export default HomePage