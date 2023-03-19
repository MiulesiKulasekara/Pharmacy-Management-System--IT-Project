express = require('express')
const router1 = express.Router()

const { inputOrderNotice,getNotice,getNoticeById,updateItem } = require('../controllers/OrderNoticeController.js')



router1.post('/addNotice',inputOrderNotice)
router1.get('/getNotice',getNotice)
router1.get('/getNoticebyId/:id',getNoticeById)
router1.put('/updateNotice/:id',updateItem)

module.exports = router1