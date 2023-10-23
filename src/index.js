require('dotenv').config()
const express = require('express')

const carros = ['S10','Hilux','Ford Ranger']

const app = express()

app.use(express.json())

app.get('/', async (req, res) => {
    return res.json(carros)
})

const port = process.env.PORT  || 3000

app.listen(process.env.PORT, () => {
    console.log(`Servidor em pé na porta ${process.env.PORT}`);
})
