'use strict'

const express = require('express')
const router = express.Router()
const auth = require('../middlewares/auth.middleware')

const usersCtrl = require('../controllers/users.controllers')
router.get('/', usersCtrl.listUsers)
router.post('/add', auth.isAuth, usersCtrl.addNewUser)
router.post('/login',usersCtrl.loginCtrl)


module.exports = router