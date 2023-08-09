const mongoose = require("mongoose");
const APIcharacter = require("../models/apicharacters.js");

module.exports = {
    getCharacters: async function (req, res, next) {
        try {
            //find all characters from characters collection i db
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
            //sætter wanted til at være parametern :character fra '/characters/:character'
            let wanted = req.params.character;
            console.log(wanted)
            // finds spesific characher from collection in db
            let character = await APIcharacter.find( { name: wanted } );
            res.locals.characters = character;
            console.log(character)
            next();
        } catch (error) {
            res.status(400).json(error.message);
        }
    }
}