express =require('express')
const router = express.Router()
const{ inputItem,getItems,updateItem,deleteItem, getItemById } = require('../controllers/inventoryController.js')

router.post('/addItem', inputItem)
router.get('/getItem', getItems)
router.put('/:id', updateItem)
router.get('/:id', getItemById)
router.delete('/:id', deleteItem)

module.exports =  router