
import DeckModel from "../models/Deck.js";

export async function getDecksController( req,res){
    const response = await DeckModel.find();
    res.json(response);
}