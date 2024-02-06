const Country = require("../models/Country")

const index = async (req, res) => {
    try {
        const data = await Country.getAll()
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const show = async (req, res) => {
    try {
        let name = req.params.name
        const country = await Country.getOneByCountryName(name)
        res.status(200).json(country)
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}

const create = async (req, res) => {
    try {
        const data = req.body
        const newCountry = await Country.create(data)
        res.status(201).json(newCountry)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const destroy = async (req, res) => {
    try {
        //find what we need to delete
        const data = req.params.name
        const country = await Country.getOneByCountryName(data)
        const result = await country.destroy()
        res.status(204).end()
        //delete

    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}

const update = async (req, res) => {
    try {
        const data = req.params.name
        const newData = req.body
        const country = await Country.getOneByCountryName(data)
        console.log(country, newData.capital)
        const updatedData = {}
        if (req.body.name === undefined) {
            updatedData.name = country.name
        } else {
            updatedData.name = newData.name
        }
        if (req.body.capital === undefined) {
            updatedData.capital = country.capital
        } else {
            updatedData.capital = newData.capital
        }
        if (req.body.population === undefined) {
            updatedData.population = country.population
        } else {
            updatedData.population = newData.population
        }
        if (req.body.languages === undefined) {
            updatedData.languages = country.languages
        } else {
            updatedData.languages = newData.languages
        }
        const result = await country.update(updatedData)
        res.status(200).json(result)

    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}

module.exports = { index, show, create, destroy, update }