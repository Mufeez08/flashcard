
import {useState,useEffect} from "react";
import {useParams} from "react-router-dom";

import { createCard } from './api/createCard';
import { getDeck } from './api/getDeck';
import { deleteCard } from './api/deleteCard';

export default function Deck(){
    const [deck,setDeck] = useState(null);
    const [cards,setCards] = useState([]);
    const [text,setText] = useState("");
    //   const [decks,setDecks] = useState([]);
    const { deckId } = useParams();

    async function handleCreateDeck(event){
        event.preventDefault();
        const {cards: serverCards} = await createCard(deckId,text);
        setCards(serverCards)
        //setDecks([...decks,deck]);
        setText("");
  }

  async function handleDeleteCard(index){
    const deckcards = await deleteCard(deckId,index);
    setCards(deckcards.cards);
    //setDecks(decks.filter((deck)=> deck._id !== deckId));
  }
  
  useEffect(()=>{
    async function fetchDecks() {
      if (!deckId) return;
      const response = await getDeck(deckId);
      setDeck(response);
      setCards(response.cards);
    }
    fetchDecks();
  },[deckId]);

  return (
    <div className="container">
      <div className="App">
    <h1>{deck?.title}</h1>
    <ul className='decks'>
        {cards.map((card,index)=>(
          <li key={index}>
            <button onClick={()=>handleDeleteCard(index)}>X</button>
            {card}
          </li> 
        ))}
    </ul>
      <form onSubmit={handleCreateDeck}>
        <label htmlFor="deck-title">Card Text</label>
        <input id="deck-title" value={text} onChange={(event)=>{setText(event.target.value)}}/>
        <button>Create Card</button>
      </form>
    </div>
    </div>
    
  );
}