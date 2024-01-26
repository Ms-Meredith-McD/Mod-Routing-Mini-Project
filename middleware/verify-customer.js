// because this is middleware it will have "req" and "res" and a new variable "next"

function verifyCustomer(req, res, next) {

    // we already would be looking at the request object to see if they already have a session logged in or not, then we decide what to do with that information  (we added in an input "fred_flinstone" for postman testing of the if/else)



    req.username = "fred_flintstone"

    if (req.method.toLowerCase() === "get") {
        next()
    } else {
        res.status(401).json({ status: "not allowed" })
    }
}

module.exports = verifyCustomer
