// I'm going to put all my product routes here
const router = require("express").Router();
const seeProducts = require("../../middleware/see-products")

router.get("/", seeProducts, (req, res) => {
    res.json({ status: "products"})
})

router.get("/:id", (req, res) => {
    //...
})

router.post("/", (req, res) => {
    //...
})

router.put("/:id", (req, res) => {
    //...
})

router.delete("/:id", (req, res) => {
    //...
})



module.exports = router;