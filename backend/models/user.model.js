const db = require('../config/db.config')


class User {
    static findUserEmailAndPassword(email, password, callback) {
        const query = "SELECT * FROM users WHERE email = ? AND password = ?";
        db.query(query, [email, password], callback);
    }

    static findUserByEmail(email, callback) {
        const query = "SELECT * FROM users WHERE email = ?";
        db.query(query, [email], callback)
    }

    static createUser(firstname, lastname, email, password, callback){
        const query = `INSERT INTO users (firstname, lastname, email, password) VALUES (?, ?, ?, ?)`;
        db.query(query, [firstname, lastname, email, password], callback);
    }

    static getAllUser(callback){
        const query = `SELECT * FROM users`;
        db.query(query, callback);
    }
}


module.exports = User