const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

module.exports = router


// request missing items from the tenant 
router.post('/multi-request', function(req, res) {

    var inforequest = req.session.data['info-request'] 

    console.log("requested-01: " + inforequest)

       
    res.redirect("/case-response-02-summary")
   
})



// request missing items from the tenant 
router.post('/rev3-multi-request', function(req, res) {

    var inforequest = req.session.data['info-request'] 

    console.log("requested-02: " + inforequest)

       
    res.redirect("/case-review-02-summary")
   
})


