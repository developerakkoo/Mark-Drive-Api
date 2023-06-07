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

exports.validateAccessCreation = async (req,res,next)=>{
    const  email = req.body.email
    const  password =req.body.password
    const  pin = await bcrypt.hash(req.body.PIN,10)
    
    if(!email){
        return res.status(400).json({message:`Email is require`});
    }
    if(!password){
        return res.status(400).json({message:`Password is require `});
    }
    if(!pin){
        return res.status(400).json({message:`Access Pin  is require `});
    }
    next();
}