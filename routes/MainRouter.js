const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("main", {name: "john"});
 });

router.post("/", (req, res) => {
    res.send("post");
});

 module.exports = router;



// exports.getMain = (req, res) => {
    
//     res.render("main");
// };