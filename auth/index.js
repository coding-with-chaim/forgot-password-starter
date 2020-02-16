const express = require('express').Router;
const router = express();
const bcrypt = require("bcrypt");
const uuidv1 = require('uuid/v1');
const { createUser, getUser } = require("../model/users");

router.post("/signup", (req, res) => {
    bcrypt.hash(req.body.password, 10).then(hashed => {
        const user = {
            email: req.body.email,
            password: hashed,
        };
        createUser(user);
        res.status(201).json();
    })
});

router.post("/login", (req, res) => {
    const thisUser = getUser(req.body.email);
    if (thisUser) {
        bcrypt.compare(req.body.password, thisUser.password).then(result => {
            if (result) {
                const token = uuidv1();
                res.status(200).json({ token });
            } else {
                res.status(401).json({ message: "Access denied" });
            }
        });
    } else {
        res.status(401).json({ message: "Access denied" });
    }
});


module.exports = router;
