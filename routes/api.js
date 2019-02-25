const express = require('express');
const router = express.Router();
const authenticated = require('../middleware/authenticated');

//--------------- curent user -----------
router.get('/current_user',authenticated,(req, res) => res.send(req.user));
module.exports = router;