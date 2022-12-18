import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export async function fetchImages(query, page = 1) {
  const params = {
    params: {
      key: '30591553-02722de834b11b67bfed3cccc',
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
      page: page,
    },
  };
  const response = await axios.get(`?q=${query}`, params);
  return response.data;
}
