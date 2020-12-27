const express = require("express"),
    router = express.Router();

router.get('', (req, res) => {
    res.render('Index')
  })
  
  router.get('/account', (req, res) => {
    res.render('account')
  })
  
  router.get('/card', (req, res) => {
    res.render('card')
  })
  
  router.get('/product', (req, res) => {
    res.render('product')
  })
  
  router.get('/ProductDetail', (req, res) => {
    res.render('ProductDetail')
  })
    
  router.get('/Index', (req, res) => {
    res.render('Index')
  })

module.exports=router;