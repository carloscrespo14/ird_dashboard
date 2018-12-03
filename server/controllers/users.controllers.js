'use strict'

const modelUser = require('../models/userModel')
const getToken = require('../services/token.services')


const userCtrl = {}

userCtrl.addNewUser = (req, res) =>{
    modelUser.findOne({userMail:req.body.email},(err, user) =>{
        if(err) return res.status(500).send({erro:'Error 500'})
        if(user) return res.status(404).send({msg:'username is ready used'})
        if(!user){
            const newUser = new modelUser({
                email:req.body.email,
                userName:req.body.username,
                password:req.body.password,
                firstName:req.body.firstname,
                lastName:req.body.lastname,
                contactPhoneNumber:req.body.contactphonenumber,
                lastLogin:null,
                active:true
            })
            
            newUser.save((err)=>{
                if(err) return res.status(500).send({msg:`err ${err}`})
                return res.status(200).send({ 
                    token:getToken.createToken( newUser),
                    email:newUser.email,
                    username:newUser.userName
                })
            })
        }
    })
}

userCtrl.loginCtrl = (req, res) => {
    modelUser.findOne({email:req.body.email}, (err, user)=>{
        if(err) return res.status(500).send({message: err})
        if (!user) return res.status(404).send({message:"can't find user mail"})
        if(user.password = req.body.password){
            let id = user.id
            let data = {
                email: user.email,
                user:user.userName,
                lastLogin:user.lastLogin,
                TOKEN: getToken.createToken(user)
            }
            modelUser.findByIdAndUpdate(id,{$set: {lastLogin:Date.now()}},(res, user)=>{})
            return res.status(200).send(data)
            
        } else {
            console.log(user)
            console.log(req.body.password)
            return res.status(401).send({message:"Password fail"})
        }
    })
}


userCtrl.listUsers = (req, res) => {
    modelUser.find({},(err, usersList) => {
        if(err) return res.status(500).send({msg:`err ${err}`})
        if(!usersList) return res.status(404).send({msg:'no hay usuarios que listar'})
        if(usersList) return res.status(200).send(usersList)

    })
}

module.exports = userCtrl