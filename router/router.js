const express = require('express')
const router = express.Router()
const controller = require('./../controllers/history')

router.get('/', (req, res)=>{
    try {
        res
        .header("Access-Control-Allow-Origin", "*")
        .status(200)
        .send({ msg:'success' })
    }
    catch(err) {
        res.status(500).send(err)
    }
})
router.get('/all', controller.getAll)
router.get('/lates', controller.getLates)
router.get('/date/:date', controller.getByDate)

module.exports = router