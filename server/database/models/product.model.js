import mongoose from 'mongoose'

const Schema = mongoose.Schema

// creating the OrderSchema
const ProductSchema = new Schema({
	title: String,
	description: String,
	image: String,
	deleted: {
		type: Boolean,
		default: false,
	},
	timesInCart: {
		type: Number,
		default: 0,
	},
	createdAt: {
		type: Date,
		default: new Date(),
	},
})

const Product = mongoose.model('product', ProductSchema)

export default Product