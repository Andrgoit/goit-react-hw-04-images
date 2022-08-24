import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { FcSearch } from 'react-icons/fc';
import {
  StyledSearchInput,
  StyledSearchButton,
  StyledForm,
  StyledHeader,
} from 'components/SearchBar/SearchBar.styled';

class SearchBar extends Component {
  state = {
    value: '',
  };

  changeSearchValue = event => {
    // console.dir(event.target);
    // console.dir(event.currentTarget);
    this.setState({ value: event.currentTarget.value });
    // console.log('21-this.state.value', this.state.value);
  };

  handlerSubmit = event => {
    event.preventDefault();
    if (this.state.value.trim() === '') {
      return toast.error('Некорректный запрос');
    }
    this.props.onChangeValue(this.state.value);
  };

  render() {
    return (
      <StyledHeader>
        <StyledForm onSubmit={this.handlerSubmit}>
          <StyledSearchButton type="submit">
            <FcSearch size="32px" />
          </StyledSearchButton>

          <StyledSearchInput
            onChange={this.changeSearchValue}
            type="text"
            name="search"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </StyledForm>
      </StyledHeader>
    );
  }
}

export default SearchBar;
