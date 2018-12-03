'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema


const CaseSchema = new Schema(
    {
        caseName:{type: String, required: true},
        sudject:String,
        desc:String,
        keywords:[String],
        startDate:String,
        finishDate:String
    
    }   
)


module.exports = mongoose.model('Case', CaseSchema)