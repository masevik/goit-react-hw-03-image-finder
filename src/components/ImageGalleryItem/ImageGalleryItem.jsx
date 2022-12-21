import PropTypes from 'prop-types';
import { Component } from 'react';
import { Modal } from '../Modal';
import {
  ImageGalleryStyledItem,
  ImageGalleryItemImage,
} from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = { isModalOpen: false };

  toggleModal = () => {
    this.setState(({ isModalOpen }) => ({ isModalOpen: !isModalOpen }));
  };

  render() {
    const { webformatURL, largeImageURL, tags } = this.props.image;

    return (
      <ImageGalleryStyledItem>
        <ImageGalleryItemImage
          src={webformatURL}
          alt={tags}
          onClick={this.toggleModal}
        />
        {this.state.isModalOpen && (
          <Modal
            image={largeImageURL}
            alt={tags}
            onToggleModal={this.toggleModal}
          >
            <img src={largeImageURL} alt={tags} />
          </Modal>
        )}
      </ImageGalleryStyledItem>
    );
  }
}

ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
};
