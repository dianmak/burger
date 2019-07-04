const express = require("express");

const router = express.Router();

// Import the model to use its database functions.
const db = require("../models");

router.get("/", function (req, res) {
    // db.Burger.create({ burger_name: "Test Burger" }, function (result) {
    //     console.log(result);
    // })
    db.Burger.findAll({}).then(function (data) {
        const hbsObject = { Burgers: data };
        // console.log(data);
        res.render("index", hbsObject);
    });
});

router.post("/api/Burger", function (req, res) {
    db.Burger.create({ burger_name: req.body.burgername }).then(function (result) {
        console.log("burger created!");
        res.json(result);
    });
});

router.put("/api/Burger/:id", function (req, res) {
    db.Burger.update(
        { devoured: true },
        { where: { id: req.params.id } }
    ).then(function (result) {
        if (result.changedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        }
        res.status(200).end();

    });
});

// Export routes for server.js to use.
module.exports = router;
