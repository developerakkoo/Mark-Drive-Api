const bcrypt = require('bcrypt');

exports.validateUserCreation = async (req,res,next)=>{
    const userData = {
        name : req.body.name,
        email: req.body.email,
        password: await bcrypt.hash(req.body.password,10)
    }
    if(!userData.name){
        return res.status(400).json({message:`User Name is require `});
    }
    if(!userData.email){
        return res.status(400).json({message:`Email is require`});
    }
    if(!userData.password){
        return res.status(400).json({message:`Password is require `});
    }
    next();
}