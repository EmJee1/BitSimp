import './database/connection/connection.db.js'
import bodyParser from 'body-parser'
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

const { PORT } = process.env

const app = express()

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())

import productsRouter from './router/products.router.js'
import usersRouter from './router/users.router.js'
import authRouter from './router/auth.router.js'
app.use('/products', productsRouter)
app.use('/users', usersRouter)
app.use('/auth', authRouter)

app.listen(PORT, () => console.log(`Express listening on port ${PORT}`))