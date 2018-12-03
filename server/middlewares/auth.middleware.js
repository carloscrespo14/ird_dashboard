'use strict'

const jwt = require('jwt-simple')
const moment = require('moment')
const config = require('../settings/config')


const authMiddleWare = {}


authMiddleWare.isAuth = (req, res, next) =>{
    if(!req.headers.authorization){
        return res.status(403).send({message:'require login'})
    }
    const token = req.headers.authorization.split(" ")[1]
    const payload = jwt.decode(token, config.SECRET_TOKEN)
    
    if(payload.exp <= moment().unix()){
        return res.status(401).send({message:'token has expired'})
    }
    
    req.user = payload.sub
    next()
}

module.exports = authMiddleWare