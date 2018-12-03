'use strict'

const jwt = require('jwt-simple')
const moment = require('moment')
const config =require('../settings/config')

const tokenService = {}

tokenService.createToken = (user) => {
    const payload = {
        sub:user.email,
        iat:moment().unix(),
        exp:moment().add(14, 'days').unix(),
    }

    return jwt.encode(payload, config.SECRET_TOKEN )
}

tokenService.decodeToken = function(token){
   const decode = jwt.decode(token, config.SECRET_TOKEN) 
   return decode
}

module.exports = tokenService