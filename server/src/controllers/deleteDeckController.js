import DeckModel from "../models/Deck.js";

export async function deleteDeckController(req,res){
    const deckId = req.params.deckId;
    const response = await DeckModel.findByIdAndDelete(deckId);
    res.json(response);
}