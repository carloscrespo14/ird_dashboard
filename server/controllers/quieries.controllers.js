'use strict'

const services = require('../services/queries.services')

const queriesCtrl = {}

queriesCtrl.getQuery =  (req, res) => {
    let myQuery = req.params.search
    let google =  services.googleApi(myQuery)
    let eluniversal =  services.elUniversal(myQuery)
    let milenio =  services.milenio(myQuery)
    // let bing =  services.bingApi(myQuery)
    res.status(200).send({
                            'msg':'query success',
                            'status':200,
                            'object':{
                            'google':google
                            //'milenio.com':milenio,
                            //'eluniversal.com.mx':eluniversal
                        
                            }
                        })

}


module.exports = queriesCtrl