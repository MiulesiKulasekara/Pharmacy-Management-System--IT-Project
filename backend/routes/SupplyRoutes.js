 express = require( 'express')
const router = express.Router()
const { inputSupplier,getSuppliers,updateSupplier,deleteSupplier, getSupplierbyId } = require( '../controllers/SupplyController.js')

router.post('/addSupplier', inputSupplier)
router.get('/getSuppliers', getSuppliers)
router.put('/:id', updateSupplier)
router.get('/:id', getSupplierbyId)
router.delete('/:id', deleteSupplier)


module.exports = router