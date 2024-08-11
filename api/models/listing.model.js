import mongoose from 'mongoose';

const listingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    wing: {
      type: String,
      required: true,
    },
    Price: {
      type: Number,
      required: true,
    },
    seater: {
      type: Number,
      required: true,
    },
    room: {
      type: Number,
      required: true,
    },
    filter: {
      type: Boolean,
      required: true,
    },
    balcony: {
      type: Boolean,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    bathroom: {
      type: Boolean,
      required: true,
    },
    imageUrls: {
      type: Array,
      required: true,
    },
    userRef: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Listing = mongoose.model('Listing', listingSchema);

export default Listing;
