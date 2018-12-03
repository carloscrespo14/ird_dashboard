'use strict'

const express = require('express')
const router = express.Router()
const auth = require('../middlewares/auth.middleware')

const casesCtrl = require('../controllers/cases.controllers')
router.get('/', auth.isAuth, casesCtrl.findThemAll)
router.get('/:id', auth.isAuth, casesCtrl.findOneCase)
router.post('/add',auth.isAuth, casesCtrl.addOne)


module.exports = router