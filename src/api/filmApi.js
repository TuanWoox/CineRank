export async function getFilm(submittedSearch) {
  if (!submittedSearch) return []; // Prevent API call with empty search
  const result = await fetch(
    `http://www.omdbapi.com/?apikey=c7d3d788&s=${submittedSearch}`
  );
  if (!result.ok) {
    throw new Error(`HTTP error! Status: ${result.status}`);
  }
  const data = await result.json();
  return data.Search || []; // Return empty array if no results
}
export async function getOneFilm(imdbId) {
  const result = await fetch(
    `http://www.omdbapi.com/?apikey=c7d3d788&i=${imdbId}`
  );
  const data = await result.json();
  return data.Response === "False" ? null : data;
}
