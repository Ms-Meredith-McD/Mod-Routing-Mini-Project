// because this is middleware it will have "req" and "res" and a new variable "next"

function checkId(req, res, next) {
req.proof = 20


if (req.proof >= 21 ){
    next()
} else {
    res.status(401).json({ status: "underage", proof: req.proof  })
}
}

module.exports = checkId