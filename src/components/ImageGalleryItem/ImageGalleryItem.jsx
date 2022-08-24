import React from 'react';
import {
  StyledImageGalleryItem,
  StyledImageGalleryImg,
} from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  id,
  tags,
  webformatURL,
  onClick,
  object,
}) => {
  return (
    <StyledImageGalleryItem key={id} onClick={() => onClick(object)}>
      <StyledImageGalleryImg src={webformatURL} alt={tags} />
    </StyledImageGalleryItem>
  );
};
