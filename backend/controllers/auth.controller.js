const user = require('../models/user.model')

exports.login = (req, res) => {
    const {email, password} = req.body;
    user.findUserEmailAndPassword(email, password, (err, result)=> {
        if(err) { return res.status(500).json({error: err})}

        if(result.length > 0){
            res.json({
                status: true,
                message: "login successfully",
                user: result[0]
            });
        }else {
            res.json({
                status: false,
                message: "Invalid Credentials!"
            });
        }
    });
}

exports.register = (req, res) => {
    res.send("register done");
}