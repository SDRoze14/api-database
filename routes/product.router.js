const express = require('express')

const router = express.Router()

const Product = require('../models/product.model')

// แสดงทั้งหมด
router.get('/', async (req, res) => {
  try {
    const product = await Product.find()
    res.json(product)
  } catch (err) {
    res.status(400).json({ message: err})
  }
})


router.get('/:id', async (req, res) => {
  try {
    const product = await Product.find({_id: req.params.id})
    res.json(product)
  }catch (err) {
    res.status(400).json({ message: err})
  }
})

router.post('/add', (req, res) => {
  const productData = new Product(req.body)
  Product.findOne({
    name_product: req.body.name_product
  })
    .then(product => {
      if (!product) {
        Product.create(productData)
          .then(res_product => {
            res.json({ status: `add ${res_product.name_product} successful`})
          })
          .catch(err_product => {
            res.status(400).json({ message: err_product})
          })
      }
      else {
        res.status(400).json({ message: `Product already exists`})
      }
    })
    .catch(err => {
      res.status(500).json({ message: err})
    })

})

router.delete('/:id', async (req, res) => {
  try {
    const deleteProduct = await Product.remove({_id: req.params.id})
    res.json(deleteProduct)
  } catch (err) {
    res.status(400).json({ message: err})
  }
})

router.patch('/:id', async (req, res) => {
  try {
    const updateProduct = await Product.updateOne(
      {_id: req.params.id},
      {
        $set: {
          name_product: req.body.name_product,
          amount: req.body.amount,
          price: req.body.price,
          image: req.body.image
          }
      }
    )
    res.json(updateProduct)
  } catch (err) {
    res.status(400).json({message: err})
  }
})

module.exports = router