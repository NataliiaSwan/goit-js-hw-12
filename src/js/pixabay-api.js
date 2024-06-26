import axios from 'axios';

export async function doFetch(query, page) {
  const API_KEY = '43290538-553335dd3499f06be9a5135a9';
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page,
    per_page: 15,
  });
  const { data } = await axios(`https://pixabay.com/api/?${params}`);
  return data;
}
