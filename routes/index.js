const express = require('express');
const router = express.Router();
router.get('/',(req,res)=>{res.send(" hay ninja ")});
router.get('/home',(req,res)=>{res.send(" home  ninja  woo !!")});
module.exports = router ;