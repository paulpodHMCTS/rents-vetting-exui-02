const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

module.exports = router


// request missing items from the tenant 
router.post('/letter-request', function(req, res) {

    var inforequest = req.session.data['info-request'] 

    console.log("requested: " + inforequest)

       
    res.redirect("/letter-preview")
   
})


// request missing items from the tenant 
router.post('/case-response-02-multi-request', function(req, res) {

    var inforequest = req.session.data['info-request'] 

    console.log("requested: " + inforequest)

       
    res.redirect("/letter-preview")
   
})

