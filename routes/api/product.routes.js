// I'm going to put all my product routes here
const router = require("express").Router();
const fs = require('fs');

router.get("/products", (req, res) => {
    console.log(req.database)
    fs.readFile('../../db/products.json', 'utf8', (err, data) => {
        if (err){
            console.error(err);
            return res.status(500).json({error: 'Internal server error'});
        }
        const products = JSON.parse(data)
        res.json(products);
    })
})

// router.get("/:id", (req, res) => {
//     //...
// })

// router.post("/", (req, res) => {
//     //...
// })

// router.put("/:id", (req, res) => {
//     //...
// })

// router.delete("/:id", (req, res) => {
//     //...
// })



module.exports = router;