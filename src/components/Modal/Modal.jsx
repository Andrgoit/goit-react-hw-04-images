import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import {
  StyledModalBackground,
  StyledModalCard,
  StyledModalCardImg,
} from 'components/Modal/Modal.styled';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  // state = {
  //   largeImageURL: '',
  //   tags: '',
  // };

  componentDidMount() {
    window.addEventListener('keydown', this.hendleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.hendleKeyDown);
  }

  // componentDidUpdate(prevProps, _) {
  //   const prevPicture = prevProps.largeImageURL;
  //   const nextPicture = this.props.picture.largeImageURL;
  //   if (prevPicture !== nextPicture) {
  //     this.setState({ largeImageURL: nextPicture });
  //   }
  // }

  hendleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  hendleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    const { largeImageURL, tags } = this.props.picture;
    // console.log('this.props.picture', this.props.picture);
    return createPortal(
      <StyledModalBackground onClick={this.hendleBackdropClick}>
        <StyledModalCard>
          <StyledModalCardImg src={largeImageURL} alt={tags} />
        </StyledModalCard>
      </StyledModalBackground>,
      modalRoot
    );
  }
}

export default Modal;
