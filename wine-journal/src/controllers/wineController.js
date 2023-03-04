const wineService = require('../services/wineService')

const getAllWine = (req, res) => {
    const allWine = wineService.getAllWine()
    res.send('Get all wines')
}

const getOneWine = (req, res) => {
    const getOneWine = wineService.getOneWine()
    res.send('Get an existing wine favorite')
}

const createNewWine = (req, res) => {
    const createNewWine = wineService.createNewWine()
    res.send('Create a new wine favorite')
}

const updateOneWine = (req, res) => {
    const updateOneWine = wineService.updateOneWine()
    res.send('Update an existing wine favorite')
}

const deleteOneWine = (req, res) => {
    const deleteOneWine = wineService.deleteOneWine()
    res.send('Delete an exiting wine favorite')
}

module.exports = {
    getAllWine,
    getOneWine, 
    createNewWine, 
    updateOneWine, 
    deleteOneWine,
}