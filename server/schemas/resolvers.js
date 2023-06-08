const {AuthenticationError} = require("apollo-server-express");
const { Character } = require("../models/Character");

const resolvers = {
    Query: {
        characters: async() => {
            return Character.find();
        }
    }
}

module.exports = resolvers;