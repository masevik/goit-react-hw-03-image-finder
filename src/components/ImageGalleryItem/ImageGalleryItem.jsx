import PropTypes from 'prop-types';
import {
  ImageGalleryStyledItem,
  ImageGalleryItemImage,
} from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ data }) => {
  return (
    <>
      {data.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryStyledItem key={id}>
          <ImageGalleryItemImage src={webformatURL} alt={tags} />
        </ImageGalleryStyledItem>
      ))}
    </>
  );
};

ImageGalleryItem.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
