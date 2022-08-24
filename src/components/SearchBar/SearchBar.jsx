import { useState } from 'react';
import { toast } from 'react-toastify';
import { FcSearch } from 'react-icons/fc';
import {
  StyledSearchInput,
  StyledSearchButton,
  StyledForm,
  StyledHeader,
} from 'components/SearchBar/SearchBar.styled';

const SearchBar = ({ onChangeValue }) => {
  const [value, setValue] = useState('');

  const changeSearchValue = event => {
    setValue(event.currentTarget.value);
  };

  const handlerSubmit = event => {
    event.preventDefault();
    if (value.trim() === '') {
      return toast.error('Некорректный запрос');
    }
    onChangeValue(value);
    setValue('');
  };

  return (
    <StyledHeader>
      <StyledForm onSubmit={handlerSubmit}>
        <StyledSearchButton type="submit">
          <FcSearch size="32px" />
        </StyledSearchButton>

        <StyledSearchInput
          onChange={changeSearchValue}
          value={value}
          type="text"
          name="search"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </StyledForm>
    </StyledHeader>
  );
};

export default SearchBar;
