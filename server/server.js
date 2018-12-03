'use strict'
const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const config =require('./settings/config')
const cors = require('cors')
const server = express()

//middlewares
server.use(morgan('dev'))

server.use(bodyParser.urlencoded({
  extended: true
}));
server.use(bodyParser.json());
server.use(cors());

//Routes
server.use('/', require('./routes/welcome.route'))
server.use('/api/queries', require('./routes/queries.routes'))
server.use('/api/cases', require('./routes/cases.routes'))
server.use('/api/users',require('./routes/users.routes'))

mongoose.connect(config.DB, { useNewUrlParser: true }, (err, res)=>{
    if (err) {
      return console.log('db connection process failed')
    } else {
      console.log('api ready connected with data base')
    }
    server.listen(config.PORT, ()=>{
        console.log(`App running at http://${config.URL}:${config.PORT}`)
        console.log(`Use Ctrl + C to stop`)
    })
})

