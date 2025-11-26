const db = require('../config/db.config')

class Bazar {

    // create  bazar
    static createBazar(userId, date, foodList, totalAmount, callback){
        let query = `INSERT INTO bazars (user_id, date, food_list, total_amount) VALUES (?, ?, ?, ?)`;
        db.query(query, [userId, date, foodList, totalAmount], callback);
    }

    // get all bazar
    static getAllBazar(callback){
        let query = `SELECT b.id, u.firstname, u.lastname, b.date, b.total_amount FROM bazars b JOIN users u ON b.user_id = u.id ORDER BY b.date`;
        db.query(query, callback);
    }

    // get single bazar
    static getBazarById(id, callback){
        let query = `SELECT * FROM bazars WHERE id = ?`;
        db.query(query, [id], callback);
    }


    // update
    static update(id, date, foodList, totalAmount, callback){
        const  query = `
            UPDATE bazars
            SET date = ?, food_list = ?, total_amount = ?
            WHERE id = ?
        `;
        db.query(query, [date, foodList, totalAmount, id], callback)
    }

} 

module.exports = Bazar