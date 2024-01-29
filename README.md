  Via API calls ONLY: 

  1. Allow a user to see all products  
      - make an express route listener for this
      - test the route
      - can I console.log all the products
      - can I send back all the product data

  2. Allow user to see a specific product by id

  3. Allow a user to see all customers 
  4. Allow user to see a specific customer by id

  5. Allow a user to add a new customer
     - Access the existing customer array
     - Send in a new customer record via POST api call 
         - fs.writeFile
     - Update the array 
         -put
     - Use fs.writeFile to create a new customers.json file wih the new data

  - OPTIONAL -

  6. Create a web page with a form on it for a new customer
     You'll need a route that serves up the page w/ the form 
     The page itself needs a javascript for the form submission 
     The JS file makes a fetch POST request w/ the form data
     When the user submits the form, do #5 above