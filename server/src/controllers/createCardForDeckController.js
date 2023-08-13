import DeckModel from "../models/Deck.js";


export async function createCardForDeckController(req,res){
    const deckId = req.params.deckId;
    const deck = await DeckModel.findById(deckId);
    const {text} = req.body;
    if (!deck) return res.status(400).send("no deck of this id exists");
    deck.cards.push(text);
    await deck.save();
    res.json(deck); 
 }