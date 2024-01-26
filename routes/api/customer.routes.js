// I'm going to put all my customer routes here
const router = require("express").Router();
// injecting in midleware
const verifyCustomer = require("../../middleware/verify-customer")
const checkId = require("../../middleware/check-id")


router.get("/id", checkId, (req, res) => {
    res.json({ status: "21+", proof: req.proof })
})

router.get("/ok", (req, res) => {
    res.json({ status: "ok" })
})

// this is a protected route, the middleware is injected into the middle and it can only happen if the customer is logged in
router.get("/:id", verifyCustomer, (req, res) => {
    res.json({ status: "ok", username: req.username })
})

module.exports = router;

