import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem';
import { ImageGalleryList } from './ImageGallery.styled';

export const ImageGallery = ({ images }) => {
  return (
    <ImageGalleryList>
      {images.map(image => (
        <ImageGalleryItem image={image} key={image.id} />
      ))}
    </ImageGalleryList>
  );
};

ImageGallery.propTypes = { children: PropTypes.element };
