import mongoose from "mongoose";

// const Schema = mongoose.Schema;
// const ObjectId = mongoose.Types.ObjectId;

const DeckSchema = new mongoose.Schema({
    title: String,
    cards: [String]
});

const DeckModel = mongoose.model("deck",DeckSchema);

export default DeckModel;