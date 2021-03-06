'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt-nodejs')

//Schema User
const UserSchema = new Schema(
    {
        email:{type:String, unique:true, lowercase:true},
        userName:{type:String, unique:true, lowercase:true},
        password:{type:String},
        createdDate:{type:Date, default:Date.now()},
        firstName:{type:String, lowercase:true},
        lastName:{type:String, lowercase:true},
        contactPhoneNumber:{type:String, lowercase:true},
        lastLogin:{type:Date},
        active:Boolean
    }
)

//Hash user passoword
UserSchema.pre('save',function(next){
    let user = this
    console.log(UserSchema)
    if(!user.isModified('password')) return next()

    bcrypt.genSalt(10, (err, salt)=>{
        if(err) {
            
            return next()
        }

        bcrypt.hash(user.password, salt, null,(err, hash)=>{
            if(err){
                return next(err)
            } 
                

            user.password = hash
            next()
        })
    })
})
//Exports 
module.exports = mongoose.model('User', UserSchema)