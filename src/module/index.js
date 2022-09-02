const express = require('express')
const router = express.Router()

const Bank = require('./bank/bank')
router

 .get('/',Bank.GET_DATA)
 .post('/newdata',Bank.CREATE_DATA)
 .put('/updatedata',Bank.UPDATE_DATA)
 .delete('/deletedata',Bank.DELETE_DATA)
 
 module.exports = router
