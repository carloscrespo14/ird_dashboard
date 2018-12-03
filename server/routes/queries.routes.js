'use strict'

const express = require('express')
const router = express.Router()
const auth = require('../middlewares/auth.middleware')

const queriesCtrl = require('../controllers/quieries.controllers')

router.get('/:search',auth.isAuth, queriesCtrl.getQuery)


module.exports = router