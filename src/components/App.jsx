import { Component } from 'react';
import { Box } from './Box';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem';
import { fetchImages } from './api/getImage';

export class App extends Component {
  state = { query: '', page: 1, result: [], error: null };

  onSubmitSearch = value => {
    this.setState(value);
  };

  componentDidUpdate = async (_, prevState) => {
    try {
      const isQueryChanged = prevState.query !== this.state.query;
      console.log(isQueryChanged);
      const isPageChanged = prevState.page === this.state.page;
      console.log(isPageChanged);

      if (isQueryChanged && isPageChanged) {
        const response = await fetchImages(this.state.query, this.state.page);
        console.log(response.hits);
        this.setState({ result: response.hits });
      }
    } catch (error) {
      this.setState({ error: 'Ошибка' });
    }
  };

  render() {
    return (
      <Box>
        <Searchbar onSubmit={this.onSubmitSearch} />
        {this.state.query !== '' && (
          <ImageGallery>
            <ImageGalleryItem data={this.state.result} />
          </ImageGallery>
        )}
        {this.state.error && <p>{this.state.error}</p>}
      </Box>
    );
  }
}
