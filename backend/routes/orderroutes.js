express =require('express')
const router = express.Router()
const{ inputorder } = require('../controllers/order.js')

router.post('/addorder', inputorder)


module.exports = router