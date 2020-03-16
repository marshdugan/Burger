const express = require("express");

const router = express.Router();

const burger = require("../models/burgerModel.js");

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        res.render("index", {burgers: data});
    });
});

router.post("/api/burgers", function(req, res) {
    burger.insertOne([req.body.name], function(data) {
        res.json({id: data.insertId});
    });
});

router.put("/api/burgers/:id", function(req, res) {
    burger.updateOne([true], req.params.id, function(data) {
        res.end();
    });
})

module.exports = router;