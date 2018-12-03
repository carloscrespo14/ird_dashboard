'use strict'
const request = require('request')
var objectGoogle, objectUniversal, objectMilenio,objectBing

function googleApi(query){
  let url = `https://www.googleapis.com/customsearch/v1?key=AIzaSyCUPjSbP73fHuDGTzus8i9YDr_IrxMDiC8&cx=008823822850111325216:zzqkspd1koo&q=${query}`

    request({
        url: url,
        json: true
    },async function (error, response, body) {
        if (!error && response.statusCode === 200) {
            objectGoogle = await response.body.items
        }else{
            objectGoogle = {'message':'superaste la cuota de busquedas','status':response.statusCode}
        }
    })
  return objectGoogle
}

function elUniversal(query){
    let url = `https://www.googleapis.com/customsearch/v1?key=AIzaSyCUPjSbP73fHuDGTzus8i9YDr_IrxMDiC8&cx=008823822850111325216:3awxr0mljqm&q=${query}`
  
      request({
          url: url,
          json: true
      },async function (error, response, body) {
          if (!error && response.statusCode === 200) {
              objectUniversal = await response.body.items
          }else{
            objectUniversal = {'message':'superaste la cuota de busquedas','status':response.statusCode}
          }
      })
    return objectUniversal
}

function milenio(query){
    let url = `https://www.googleapis.com/customsearch/v1?key=AIzaSyCUPjSbP73fHuDGTzus8i9YDr_IrxMDiC8&cx=008823822850111325216:a0-0iz7rwbe&q=${query}`

    request({
        url: url,
        json: true
    },async function (error, response, body) {
        if (!error && response.statusCode === 200) {
            objectMilenio = await response.body.items
        }else{
            objectMilenio = {'message':'superaste la cuota de busquedas','status':response.statusCode}
        }
    })
return objectMilenio
}  
  


function bingApi(query){
    let subscriptionKey = '8e8b0894af6b4e2ea59bf1fcdb38d8f9'
    let url = `api.cognitive.microsoft.com/bing/v7.0/search?q=pedro%20lopez%20elias`
  
      request({
          url: url,
          headers:{ 'Ocp-Apim-Subscription-Key': subscriptionKey },
          json: true
      },async function (error, response, body) {
          if (!error && response.statusCode === 200) {
              objectBing = await response.body
          }
      })
    return objectBing
}
  


module.exports = {
  googleApi,
  bingApi,
  elUniversal,
  milenio
}