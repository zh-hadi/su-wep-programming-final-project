const user = require('../models/user.model')

exports.login = (req, res) => {
    const {email, password} = req.body;
    user.findUserEmailAndPassword(email, password, (err, result)=> {
        if(err) { return res.status(500).json({error: err})}

        if(result.length > 0){

            req.session.authuser = true;
            res.json({
                status: true,
                message: "login successfully",
                user: result[0],
                url: "/dashboard"
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
    const {firstname, lastname, email, password} = req.body;

    // console.log(firstname)
    // console.log(lastname)
    // console.log(email)
    // console.log(password)

    user.findUserByEmail(email, (err, result)=> {
        if(err){
            console.log(err)
            return res.status(500).json({
                status: false,
                message: err
            })
        }
        if(result.length > 0){
            return res.json({
                status: false,
                message: "This email is already registered."
            });
        }else {
            user.createUser(firstname, lastname, email, password, (err2, result2)=> {
                if(err2){
                    console.log(err2)
                    return res.status(500).json({
                        status: false,
                        message: err2
                    })
                }
                if(result2.affectedRows  > 0){
                    return res.json({
                        status: true,
                        message: "Registation successfully!",
                        url: "/login"
                    });
                }
            })
        }



    })
}


exports.logout = (req, res) => {
    console.log(req.session.authuser);
    req.session.destroy();
    return res.json({
        status: true,
        message: "logout successfully!",
        url: "/login"
    });
}