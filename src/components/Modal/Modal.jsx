import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { Backdrop, ModalContent } from './Modal.styled';
import { Component } from 'react';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onToggleModal();
    }
  };

  handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      this.props.onToggleModal();
    }
  };

  render() {
    return createPortal(
      <Backdrop onClick={this.handleBackdropClick}>
        <ModalContent>{this.props.children}</ModalContent>
      </Backdrop>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  children: PropTypes.object.isRequired,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onToggleModal: PropTypes.func.isRequired,
};
