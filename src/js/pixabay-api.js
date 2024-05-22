const API_KEY = '44018345-85ec7856faf02135ba80b8e93';
const BASE_URL = 'https://pixabay.com/api/';

export function fetchImages(query) {
  const url = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(
    query
  )}&image_type=photo&orientation=horizontal&safesearch=true`;

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        return Promise.reject('Network response was not ok');
      }
      return response.json();
    })
    .then(data => data.hits)
    .catch(error => {
      console.error('Error fetching images:', error);
      return Promise.reject(error);
    });
}
