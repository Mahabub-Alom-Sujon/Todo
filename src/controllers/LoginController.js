const ProfileModel = require("../models/profileModel");
const jwt = require('jsonwebtoken');

exports.UserLogin = (req, res) => {
    let UserName=req.body['UserName'];
    let Password = req.body['Password'];
    ProfileModel.find({ UserName: UserName, Password: Password }, (err, data) => {
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else {
            if(data.length>0){
  
                // Create Auth Token
                let Payload={exp: Math.floor(Date.now() / 1000) + (24*60*60), data:data[0]}
                let token = jwt.sign( Payload,'SecretKey123456789');
  
                res.status(200).json({status:"success",token:token, data:data[0]})
            }
            else {
                res.status(401).json({status:"unauthorized"})
            }
        }
    });
}