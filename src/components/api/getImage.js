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
  const { data } = await axios.get(`?q=${query}`, params);
  const images = getNormalizeImages(data.hits);
  const totalPages = Math.ceil(data.totalHits / params.params.per_page);

  return { images, totalPages };
}

const getNormalizeImages = images => {
  const normalizedImages = images.map(
    ({ id, webformatURL, largeImageURL, tags }) => {
      const item = {};
      item['id'] = id;
      item['webformatURL'] = webformatURL;
      item['largeImageURL'] = largeImageURL;
      item['tags'] = tags;
      return item;
    }
  );
  return normalizedImages;
};
