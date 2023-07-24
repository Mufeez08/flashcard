import logo from './logo.svg';
import {useState,useEffect} from "react";
// import './App.css';

function App() {
  const [title,setTitle] = useState("");
  const [decks,setDecks] = useState([]);

  function handleCreateDeck(event){
    event.preventDefault();
    fetch("http://localhost:3001/deck",{
      method:"POST",
      body: JSON.stringify({
        title: title,
      }),
      headers: {
        "Content-Type":"application/json",
      },
    }).then(()=>{
      setTitle("");
    });

  }
  
  useEffect(()=>{
    async function fetchDecks() {
      const response = await fetch("http://localhost:3001/deck");
      console.log(response);
      const newdecks = await response.json();
      console.log(newdecks);
      setDecks(newdecks);
    }
    fetchDecks();
  },[]);

  return (
    <div className="App">
    <ul className='decks'>
        {decks.map((deck)=>(
          <li key={deck._id}>{deck.title}</li>)
          )}
    </ul>
      <form onSubmit={handleCreateDeck}>
        <label htmlFor="deck-title">Deck Title</label>
        <input id="deck-title" value={title} onChange={(event)=>{setTitle(event.target.value)}}/>
        <button>Create Deck</button>
      </form>
    </div>
  );
}

export default App;
