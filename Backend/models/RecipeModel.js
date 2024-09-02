const mongoose = require('mongoose');

// Define the schema for a Recipe
const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  ingredients: [
    {
      name: {
        type: String,
        required: true,
      },
      quantity: {
        type: String,
        required: true,
      },
    },
  ],
  instructions: {
    type: String,
    required: true,
  },
  cookingTime: {
    type: Number, // in minutes
    required: true,
  },
  categories: [
    {
      type: String,
      required: true,
    },
  ],
  cuisine: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cuisine',
    required: true,
  },
  images: [
    {
      type: String,
    },
  ],
  ratings: [
    {
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
    },
  ],
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Chef', // reference to the Chef who created the recipe
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  isApproved: {
    type: Boolean,
    default: false, // default to false, meaning not approved
  },
  isDeleted: {
    type: Boolean,
    default: false, // default to false, meaning not deleted
  },
});

// Middleware to update the updatedAt field before saving
recipeSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

// Compile and export the Recipe model
const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = { Recipe };