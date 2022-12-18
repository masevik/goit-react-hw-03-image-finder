import { Component } from 'react';
import { Box } from './Box';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem';
import { fetchImages } from './api/getImage';
import { Button } from './Button';

export class App extends Component {
  state = { query: '', page: 1, images: [], totalPages: 0, error: null };

  onSubmitSearch = value => {
    this.setState(value);
    this.setState({ page: 1, images: [] });
  };

  onLoadMore = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  componentDidUpdate = async (_, prevState) => {
    try {
      const isQueryChanged = prevState.query !== this.state.query;
      const isPageChanged = prevState.page !== this.state.page;

      if (isQueryChanged || isPageChanged) {
        const response = await fetchImages(this.state.query, this.state.page);
        const totalPages = Math.ceil(response.totalHits / 12);
        const currentPages = [...this.state.images, ...response.hits];

        this.setState({
          images: currentPages,
          totalPages,
        });
      }
    } catch (error) {
      this.setState({ error: 'Something went wrong. Please try again' });
    }
  };

  render() {
    return (
      <Box
        display="grid"
        gridTemplateColumns="1fr"
        gridGap="16px"
        paddingBottom="24px"
      >
        <Searchbar onSubmit={this.onSubmitSearch} />
        {this.state.query !== '' && (
          <ImageGallery>
            <ImageGalleryItem data={this.state.images} />
          </ImageGallery>
        )}
        {this.state.images.length > 0 &&
          this.state.page < this.state.totalPages && (
            <Button onClick={this.onLoadMore}>Load more</Button>
          )}
        {this.state.error && <p>{this.state.error}</p>}
      </Box>
    );
  }
}
