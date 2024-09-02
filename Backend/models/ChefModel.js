const mongoose = require('mongoose');

const chefSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    bio: String,
    recipes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Recipe' }],
    dishes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Dish' }]
});

const Chef = mongoose.model('Chef', chefSchema);
module.exports = Chef;
