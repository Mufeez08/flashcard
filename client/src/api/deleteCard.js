import { API_URL } from "./config";

export async function deleteCard(deckId,index) {
    const response = await fetch(`${API_URL}/deck/${deckId}/cards/${index}`,{
      method:"DELETE",
    });
    return response.json();
}