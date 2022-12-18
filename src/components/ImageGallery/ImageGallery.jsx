import PropTypes from 'prop-types';
import { ImageGalleryList } from './ImageGallery.styled';

export const ImageGallery = ({ children }) => {
  return <ImageGalleryList>{children}</ImageGalleryList>;
};

ImageGallery.propTypes = { children: PropTypes.element };
