import { Component } from 'react';
import { Box } from './Box';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { fetchImages } from './api/getImage';
import { Button } from './Button';
import { toast } from 'react-toastify';
import { Loader } from './Loader';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    totalPages: 0,
    error: null,
    isLoading: false,
  };

  componentDidUpdate = async (_, prevState) => {
    const { query, page, images, isLoading } = this.state;

    try {
      const isQueryChanged = prevState.query !== query;
      const isPageChanged = prevState.page !== page;

      if (isQueryChanged || isPageChanged) {
        const response = await fetchImages(query, page);
        const totalPages = Math.ceil(response.totalHits / 12);

        this.setState({
          images: [...images, ...response.hits],
          totalPages,
        });
      }
    } catch (error) {
      this.setState({ error: 'Something went wrong. Please try again' });
      this.errorMessage();
    } finally {
      const isLoaderChanged = prevState.isLoading !== isLoading;

      if (!isLoaderChanged) {
        this.setState({ isLoading: false });
      }
    }
  };

  errorMessage = () =>
    toast.error('Something went wrong. Please try again', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });

  onSubmitSearch = value => {
    this.setState(value);
    this.setState({ page: 1, images: [], isLoading: true });
  };

  onLoadMore = () => {
    this.setState({ isLoading: true });
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  render() {
    const { query, page, images, isLoading, totalPages } = this.state;

    return (
      <Box
        display="grid"
        gridTemplateColumns="1fr"
        gridGap="16px"
        paddingBottom="24px"
      >
        <Searchbar onSubmit={this.onSubmitSearch} />
        {query !== '' && <ImageGallery images={images}></ImageGallery>}
        {images.length > 0 && page < totalPages && (
          <Button onClick={this.onLoadMore}>Load more</Button>
        )}
        {isLoading && <Loader />}
      </Box>
    );
  }
}
