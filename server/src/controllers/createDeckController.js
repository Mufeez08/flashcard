import DeckModel from "../models/Deck.js";


export async function createDeckController(req,res){
    const newDeck = new DeckModel({
        title: req.body.title 
    });
    const response = await newDeck.save();
    res.json(response); 
 }