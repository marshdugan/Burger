const connection = require("./connection.js");

const orm = {
    selectAll: function(table, cb) {
        const queryString = `SELECT * FROM ${table}`;
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function(table, name, cb) {
        console.log(name);
        const queryString = `INSERT INTO ${table} SET ?`;
        connection.query(queryString, [{burger_name: name}], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function(table, update, whereCol, cb) {
        const queryString = `UPDATE ${table} SET ? WHERE id = ${whereCol}`;
        connection.query(queryString, [{devoured: update}], function(err, result) {
            if (err) throw err;
            cb(result);
        })
    }
};

module.exports = orm;