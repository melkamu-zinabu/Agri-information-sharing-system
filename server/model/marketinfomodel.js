import mongoose from "mongoose";

const marketDataSchema = new mongoose.Schema({
  crop: { type: mongoose.Schema.Types.ObjectId, ref: 'Crop', required: true },
  date: { type: Date, required: true },
  price: { type: Number, required: true },
});

export default mongoose.model('MarketData', marketDataSchema);


