const { Schema, model } = require("mongoose");

const characterSchema = new Schema({
    name: {
        type: String,
        required: true
    },
})

const Character = model("Character", characterSchema);

module.exports = Character;