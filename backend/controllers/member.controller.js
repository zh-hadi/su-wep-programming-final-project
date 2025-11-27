const User = require('../models/user.model')

exports.index = (req, res) => {
    User.getAllUser((err, result)=>{
        if(err){
            return res.status(500).json({
                status: false,
                error: err
            });
        }else {
            return res.json({
                status: true,
                data: result
            });
        }
    });
}