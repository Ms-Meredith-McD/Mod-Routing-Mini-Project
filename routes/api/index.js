// This file acts as a gatekeeper for all my api routes

const router = require('express').Router();
const storeRoutes = require("./store.routes")
const productRoutes = require("./product.routes")
const customerRoutes = require("./customer.routes")
const injectData = require("../../middleware/injectData")

router.use("/store", injectData, storeRoutes)
router.use("/product", injectData, productRoutes)
router.use("/customer", injectData, customerRoutes)







module.exports = router;