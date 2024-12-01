const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "47343859-71412f3a0c5519c6640fc8f75";

export function fetchImages(query, page = 1, perPage = 30) {
  const url = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${perPage}&page=${page}`;

  return fetch(url).then(response => {
    if (!response.ok) {
      return Promise.reject('Error fetching images');
    }
    return response.json();
  });
}
      
    