const db = require('../config/db.config')

class Bazar {
    static createBazar(userId, date, foodList, totalAmount, callback){
        let query = `INSERT INTO bazars (user_id, date, food_list, total_amount) VALUES (?, ?, ?, ?)`;
        db.query(query, [userId, date, foodList, totalAmount], callback);
    }
} 

module.exports = Bazar