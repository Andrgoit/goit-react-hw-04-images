import React from 'react';
import { StyledButtonLoadMore } from 'components/Button/Button.styled';

const LoadButton = ({ onClick }) => {
  return (
    <StyledButtonLoadMore type="button" onClick={onClick}>
      Load more...
    </StyledButtonLoadMore>
  );
};

export default LoadButton;
