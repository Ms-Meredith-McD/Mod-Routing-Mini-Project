function seeCustomer(req, res, next) {
    req.username = "Julia"

    next()
}



module.exports = seeCustomer