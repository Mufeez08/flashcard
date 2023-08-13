import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import DeckModel from "./models/Deck.js";
import cors from "cors";
import { getDecksController } from "./controllers/getDecksController.js";
import { createDeckController } from "./controllers/createDeckController.js";
import { deleteDeckController } from "./controllers/deleteDeckController.js";
import { createCardForDeckController } from "./controllers/createCardForDeckController.js";
import { getDeckController } from "./controllers/getDeckController.js";
import { deleteCardOnDeckController } from "./controllers/deleteCardOnDeckController.js";
const app = express();

app.use(cors({origin:"*"}));
app.use(express.json());

dotenv.config();
const uri = process.env.MONGO_DB_LINK;
const PORT = 3001;


app.get("/", (req,res)=>{
    res.send("hello world");
});

app.get("/deck",getDecksController);
app.post("/deck",createDeckController);
app.delete("/deck/:deckId",deleteDeckController);
app.get("/deck/:deckId",getDeckController);
app.post("/deck/:deckId/cards",createCardForDeckController);
app.delete("/deck/:deckId/cards/:index",deleteCardOnDeckController);


mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true }).then(
    ()=>{
        app.listen(PORT,(req,res)=>{console.log(`listening successfully on port ${PORT}`)});
    }
)
