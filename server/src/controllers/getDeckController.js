
import DeckModel from "../models/Deck.js";

export async function getDeckController( req,res){
    const {deckId} = req.params;
    const deck = await DeckModel.findById(deckId);
    res.json(deck);
}