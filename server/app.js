import db from './database/connection/connection.db.js'
import bodyParser from 'body-parser'
import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const { PORT } = process.env

const app = express()

app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))

import productsRouter from './router/products.router.js'
import authRouter from './router/auth.router.js'
app.use('/products', productsRouter)
app.use('/auth', authRouter)

app.listen(PORT, () => console.log(`Express listening on port ${PORT}`))