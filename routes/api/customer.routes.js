// I'm going to put all my customer routes here

const router = require('express').Router();
const verifyCustomer = require("../../middleware/verify-customer")
const fs = require('fs');

// see all customers
router.get("/", (req, res) => {
    console.log("is this customer route working? yes")
    fs.readFile('./db/customers.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal server error' });
        }
        const customers = JSON.parse(data)
        res.json(customers);
    })
})


// This is a protected route
router.get("/:id", verifyCustomer, (req, res) => {
    console.log("route for customer by ID")
    fs.readFile('./db/customers.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal server error' });
        }
        const customers = JSON.parse(data)
        const customer = customers.find( customer => customer.id == req.params.id)
        console.log(customer)
        res.json(customer);
    })
})
// add a customer
router.post("/", (req, res) => {
    fs.readFile('./db/customers.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal server error' });
        }
        const customers = JSON.parse(data)
        customers.push(req.body)
        fs.writeFile('./db/customers.json', JSON.stringify(customers), (err) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Internal server error' });
            } else {
                return res.status(200).json( customers )
            }
        })
})
})

router.put("/:id", (req, res) => {
    //...
})

router.delete("/:id", (req, res) => {
    //...
})


module.exports = router;

