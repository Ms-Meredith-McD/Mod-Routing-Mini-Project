// This file acts as a gatekeeper for all my api routes

const router = require('express').Router();
const storeRoutes = require("./store.routes")
const productRoutes = require("./product.routes")
const customerRoutes = require("./customer.routes")

router.use("/store", storeRoutes)
router.use("/product", productRoutes)
router.use("/customer", customerRoutes)







module.exports = router;