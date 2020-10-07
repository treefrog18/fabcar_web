var router = require('express').Router()
var queryUtils = require('../utils/Util')

router.get('/', async function(req, res, next){
    var result = await queryUtils.queryAlldata()
    var resultData = await JSON.parse(result)
    console.log(result)
    res.render('index', {data:resultData})
})

module.exports = router;