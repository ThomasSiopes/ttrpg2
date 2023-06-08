const {gql} = require("apollo-server-express");

const typeDefs = gql`
    type Character {
        _id: ID
        name: String
    }

    type Query {
        characters: [Character]
    }
`;

module.exports = typeDefs;