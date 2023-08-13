import { API_URL } from "./config";

export async function createCard(deckId,text){
    const response = await fetch(`${API_URL}/deck/${deckId}/cards`,{
      method:"POST",
      body: JSON.stringify({
        text: text,
      }),
      headers: {
        "Content-Type":"application/json",
      },
    });
    return response.json();
}