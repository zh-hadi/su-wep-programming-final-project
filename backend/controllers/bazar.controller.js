const Bazar = require('../models/bazar.model')

exports.store = (req, res) => {
    console.log(req.body);
    const {userID, items, total, date} = req.body;
    const items_json = JSON.stringify(items);


    Bazar.createBazar(userID, date, items_json, total, (err, result) => {
        if(err){
            console.log(err)
            return res.status(500).json({error: err})
        }else {
            return res.json({
                status: true,
                message: "Bazar added successfully!"
            });
        }
    });
    
}