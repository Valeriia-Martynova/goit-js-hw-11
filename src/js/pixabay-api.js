import axios from 'axios';

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "47343859-71412f3a0c5519c6640fc8f75";

export function fetchImages(query, page = 1, perPage = 20) {
  return axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page,
      per_page: perPage,
    },
  });
}
      
    