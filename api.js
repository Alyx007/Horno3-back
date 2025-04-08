const express = require('express')
const dotenv = require('dotenv')
dotenv.config();

const app = express()
const port = process.env.PORT || 5000

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.send('Backend de Horno3 working! 🎉')
})

//Aqui estan todas las rutas
app.use(require('./routes/routes.js'))

app.listen(port, () => {
  console.log(`Running on localhost:${port}`)
})
