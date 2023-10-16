const express = require('express')
const AppRoutes = require('./src/routes')

const dotenv = require('dotenv')
dotenv.config()

const PORT = process.env.PORT
const app = express()


app.use(express.json())

app.use('/',AppRoutes)


app.listen(PORT, () => console.log(`Server listening to port ${PORT}`))