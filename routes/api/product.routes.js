// I'm going to put all my product routes here
const router = require("express").Router();
const fs = require('fs');


router.get("/", (req, res) => {
    console.log("is this route working? yes")
    fs.readFile('./db/products.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal server error' });
        }
        const products = JSON.parse(data)
        res.json(products);
    })
})

router.get("/:id", (req, res) => {
    console.log("route for product by ID")
    fs.readFile('./db/products.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal server error' });
        }
        const products = JSON.parse(data)
        const product = products.find( product => product.id === req.params.id)
        res.json(product);
    })
})

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