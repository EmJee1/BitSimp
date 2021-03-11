import ProductModel from '../database/models/product.model.js'

export const bestSellersController = async (req, res) => {
	let productsQuery
	try {
		productsQuery = await ProductModel.find()
			.limit(20)
			.skip(0)
			.sort({ timesInCart: 'desc' })
			.exec()
	} catch (err) {
		res.status(500).json({ success: false, message: err })
		return
	}

	res.status(200).json({ success: true, products: productsQuery })
}

export const verifyProductController = async (req, res, next) => {
	const { title, description } = req.body
	console.log(req.files)

	if (!title || title.length < 3) {
		res
			.status(400)
			.json({ success: false, message: 'Title needs at least 3 characters' })
		return
	}

	// to prevent the keyword undefined being added to the database
	if (!description) req.description = ''

	next()
}