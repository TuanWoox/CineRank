const API_URL = import.meta.env.VITE_URL;

export async function getFilm(submittedSearch) {
  if (!submittedSearch) return []; // Prevent API call with empty search
  const result = await fetch(`${API_URL}&s=${submittedSearch}`);
  if (!result.ok) {
    throw new Error(`HTTP error! Status: ${result.status}`);
  }
  const data = await result.json();
  return data.Search || []; // Return empty array if no results
}

export async function getOneFilm(imdbId) {
  const result = await fetch(`${API_URL}&i=${imdbId}`);
  const data = await result.json();
  return data.Response === "False" ? null : data;
}
