import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
const { DB_CONNECTION_URI } = process.env

mongoose.connect(DB_CONNECTION_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
})

const db = mongoose.connection

db.once('open', () => {
	console.log('MongoDB connection successful')
})

db.on('error', console.error.bind(console, 'MongoDB connection error'))

export default db