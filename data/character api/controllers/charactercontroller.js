const mongoose = require("mongoose");
const APIcharacters = require("../models/apicharacters.js");

module.exports = {
    getCharacters: async function (req, res, next) {
        try {
            next();
        } catch (error) {
            res.status(400).json(error.message);
        }
    },
    getCharacter: async function (req, res, next) {
        try {
            let wanted = req.params.characters;
            console.log(wanted)
            let character = await APICity.find( { name: wanted} );
            res.locals.character = character;
            next();
        } catch (error) {
            res.status(400).json(error.message);
        }
    }
}