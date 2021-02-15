import bannerImage from '../images/adminBanner.jpg'
import CTAbanner from '../components/CTAbanner'

const AdminPage = () => {
	return (
		<>
			<CTAbanner
				backgroundImage={bannerImage}
				title='Gemakkelijk beheer van uw webshop'
				description='Hier heeft u een gemakkelijk overzicht van alle activiteiten en producten op uw webshop'
				showButton={false}
			/>
			<h1>Admin portal</h1>
		</>
	)
}

export default AdminPage