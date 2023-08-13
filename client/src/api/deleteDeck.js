import { API_URL } from "./config";

export async function deleteDeck(deckId) {
    return await fetch(`${API_URL}/deck/${deckId}`,{
      method:"DELETE",
    });
}