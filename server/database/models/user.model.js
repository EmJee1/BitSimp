import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const Schema = mongoose.Schema

// creating the OrderSchema
const OrderSchema = new Schema({
	products: [{ type: Schema.Types.ObjectId, ref: 'product' }],
	createdAt: {
		type: Date,
		default: new Date(),
	},
})

// creating the UserSchema
const UserSchema = new Schema({
	email: String,
	password: String,
	firstname: String,
	orders: [OrderSchema],
	rightsLayer: {
		type: Number,
		default: 0,
	},
	createdAt: {
		type: Date,
		default: new Date(),
	},
})

// UserSchema pre for hashing the password
UserSchema.pre('save', async function (next) {
	const hash = await bcrypt.hash(this.password, 10)

	this.password = hash
	next()
})

// UserSchema method for checking password validity
UserSchema.methods.isValidPassword = function (password) {
	const user = this
	const compare = bcrypt.compareSync(password, user.password)
	return compare
}

const User = mongoose.model('user', UserSchema)

export default User