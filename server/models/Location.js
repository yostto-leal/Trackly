import mongoose from "mongoose";

const LocationSchema = new mongoose.Schema({
  orderId: String,
  lat: Number,
  lng: Number,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Location", LocationSchema);