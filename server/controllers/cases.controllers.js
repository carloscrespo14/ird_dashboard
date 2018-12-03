'use strict'

const modelCase = require('../models/caseModel')
const caseCtrl = {}

caseCtrl.findThemAll = (req, res) => {
    modelCase.find({}, (err, casesList)=>{
        if(err) return res.status(500).send({status:500, msg:'Error'})
        if(!casesList) return res.status(404).send({status:404, msg:'cases empty'})
        res.status(200).send(casesList)
    })
}

caseCtrl.findOneCase = (req, res)=> {
    modelCase.findById(req.params.id,(err, scase)=>{
        if(err) return res.status(500).send({msg:'error interno'})
        if(!scase) return res.status(404).send({msg:'case not found'})
        return res.status(200).send(scase)
    })
}

caseCtrl.addOne = (req, res) =>{
    modelCase.findOne({caseName:req.body.caseName},(err, cases)=>{
        if(err) return res.status(500).send({msg:'error'})
        if(cases) return res.status(404).send({msg: `case name is ready used: ${cases.caseName}`})
        if(!cases){   
            const newCase = new modelCase({
                caseName: req.body.caseName,
                sudject: req.body.sudject,
                desc:req.body.desc,
                keywords:req.body.keywords,
                startDate:req.body.sd,
                finishDate:req.body.fd
            })
            newCase.save((err, newCaseStored)=>{
                if(err) return res.status(500).send({msg:'err'})
                return res.status(200).send({msg:'success', newCase: newCaseStored})
            })
        }
    })
}

module.exports = caseCtrl