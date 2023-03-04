const express = require('express')
const wineController = require('../../controllers/wineController')

const router = express.Router()

router.get('/', wineController.getAllWine)

router.get('/:wineId', wineController.getOneWine)

router.post('/', wineController.createNewWine)

router.patch('/:wineId', wineController.updateOneWine)

router.delete('/:wineId', wineController.deleteOneWine)

module.exports = router