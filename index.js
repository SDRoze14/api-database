const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json())

const mongoURL = 'mongodb+srv://Admin:MjcQveRNN0oq38cZ@datatest-ee3nm.gcp.mongodb.net/products?retryWrites=true&w=majority'
mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))


const product_router = require('./routes/product.router')
app.use('/product', product_router)

app.listen(port, () => {
  console.log(`Server has running on port ${port}`)
})

