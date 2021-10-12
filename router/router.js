const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    try {
        res
        .header("Access-Control-Allow-Origin", "*")
        .status(200)
        .send({ msg:'success'})
    }
    catch(err) {
        res.status(500).send(err)
    }
})

module.exports = router