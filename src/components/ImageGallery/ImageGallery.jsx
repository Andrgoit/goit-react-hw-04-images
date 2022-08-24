import React from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import StyledImageGalleryList from './ImageGallery.styled';

export const ImageGallery = ({ pictures, onClick }) => {
  return (
    <StyledImageGalleryList>
      {pictures.map(picture => {
        const { id, tags, webformatURL, largeImageURL } = picture;
        return (
          <ImageGalleryItem
            key={id}
            tags={tags}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            object={picture}
            onClick={onClick}
          />
        );
      })}
    </StyledImageGalleryList>
  );
};
