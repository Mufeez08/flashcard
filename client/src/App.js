import logo from './logo.svg';
import {useState,useEffect} from "react";
import {Link} from "react-router-dom";
import { createDeck } from './api/createDeck';
import { deleteDeck } from './api/deleteDeck';
import { getDecks } from './api/getDecks';
// import './App.css';

function App() {
  const [title,setTitle] = useState("");
  const [decks,setDecks] = useState([]);

  async function handleCreateDeck(event){
    event.preventDefault();
    const deck = await createDeck(title);
    setDecks([...decks,deck]);
    setTitle("");
    

  }

  async function handleDeleteClick(deckId){
    await deleteDeck(deckId);
    setDecks(decks.filter((deck)=> deck._id !== deckId));
  }
  
  useEffect(()=>{
    async function fetchDecks() {
      const response = await getDecks();
      setDecks(response);
    }
    fetchDecks();
  },[]);

  return (
    <div className='container'>
      <div className="App">
    <h1>Your Decks</h1>
    <ul className='decks'>
        {decks.map((deck)=>(
          <li key={deck._id}>
            <button onClick={()=>handleDeleteClick(deck._id)}>X</button>
            <Link to={`deck/${deck._id}`}>{deck.title}</Link>
          </li> 
          
          )
          )}
    </ul>
      <form onSubmit={handleCreateDeck}>
        <label htmlFor="deck-title">Deck Title</label>
        <input id="deck-title" value={title} onChange={(event)=>{setTitle(event.target.value)}}/>
        <button>Create Deck</button>
      </form>
    </div>
    </div>
    
  );
}

export default App;
