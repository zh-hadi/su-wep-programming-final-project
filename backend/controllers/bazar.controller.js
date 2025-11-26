const Bazar = require('../models/bazar.model')


exports.index = (req, res) => {
    Bazar.getAllBazar((err, result)=> {
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

exports.show = (req, res) => {
    const bazarId = req.params.id;

    Bazar.getBazarById(bazarId, (err, result) => {
        if(err){
            return res.status(500).json({
                status: false,
                error: err
            });
        }else {
            if(result.length == 0){
                return res.status(404).json({
                    status: false,
                    message: "No bazar found this id: "+ bazarId
                });
            }

            return res.json({
                status: true,
                data: result,
                message: "bazar found this id"
            });
        }
    });
}

exports.store = (req, res) => {
    // console.log(req.body);
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

exports.update = (req, res) => {
    const bazarId = req.params.id;

    const {date, items, total} = req.body;



    // frist check bazar exit or not 
    Bazar.getBazarById(bazarId, (err, result)=> {
        if(err){
            console.log(err)
            return res.status(500).json({error: err})
        }
        if(result.length == 0){
            return res.status(404).json({
                status: false,
                message: "Bazar not found"
            });
        }

        Bazar.update(bazarId, date, JSON.stringify(items), total, (err2, result) => {
            if(err2){
                console.log(err)
                return res.status(500).json({error: err2})
            }else {
                return res.json({
                    status: true,
                    message: "Bazar update successfully!"
                });
            }
        });
        
    })
    
}

exports.destroy = (req, res) => {
    const bazarId = req.params.id;

    // frist check bazar exit or not 
    Bazar.getBazarById(bazarId, (err, result)=> {
        if(err){
            console.log(err)
            return res.status(500).json({error: err})
        }
        if(result.length == 0){
            return res.status(404).json({
                status: false,
                message: "Bazar not found"
            });
        }

        Bazar.destroy(bazarId,  (err2, result) => {
            if(err2){
                console.log(err)
                return res.status(500).json({error: err2})
            }else {
                return res.json({
                    status: true,
                    message: "Bazar Delete successfully!"
                });
            }
        });
        
    })
}