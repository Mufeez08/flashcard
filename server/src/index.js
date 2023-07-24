import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import DeckModel from "./models/Deck.js";
import cors from "cors";
const app = express();

app.use(cors({origin:"*"}));
app.use(express.json());

dotenv.config();
const uri = process.env.MONGO_DB_LINK;
const PORT = 3001;


app.get("/", (req,res)=>{
    res.send("hello world");
});

app.get("/deck",async (req,res)=>{
    const response = await DeckModel.find();
    //console.log(response);
    res.json(response);
})

app.post("/deck",async (req,res)=>{
    const newDeck = new DeckModel({
        title: req.body.title 
    });
    const response = await newDeck.save();
    //console.log(response);
    res.json(response); 
})



mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true }).then(
    ()=>{
        app.listen(PORT,(req,res)=>{console.log(`listening successfully on port ${PORT}`)});
    }
)
