const mongoose = require("mongoose");
const APIcharacter = require("../models/apicharacters.js");

module.exports = {
    getCharacters: async function (req, res, next) {
        try {
            // read from designated countries
            let characters = await APIcharacter.find();
            // save the read in middleware variable
            res.locals.characters = characters;
            next();
        } catch (error) {
            res.status(400).json(error.message);
        }
    },
    getCharacter: async function (req, res, next) {
        try {
            let wanted = req.params.characters;
            console.log(wanted)
            let character = await APIcharacter.find( { name: wanted } );
            res.locals.characters = character;
            next();
        } catch (error) {
            res.status(400).json(error.message);
        }
    }
}