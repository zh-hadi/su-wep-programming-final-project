const auth = (req, res, next) => {
    console.log("auth : ", req.session.authuser)
    if (req.session.authuser == true) {
        return next(); 
    }

    res.redirect("/login"); 
};

module.exports = auth;