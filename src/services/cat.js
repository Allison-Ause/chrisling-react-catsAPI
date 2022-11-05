// API call to Cats api

export async function fetchCats() {
  const res = await fetch('https://api.thecatapi.com/v1/images/search?limit=10');
  const data = await res.json();
  console.log('cats', data);
  return data;
}
