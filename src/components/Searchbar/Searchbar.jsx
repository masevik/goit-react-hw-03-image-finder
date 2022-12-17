import PropTypes from 'prop-types';
import { Component } from 'react';
import {
  SearchbarHeader,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormIcon,
  SearchFormInput,
} from './Searchbar.styled';

export class Searchbar extends Component {
  static propTypes = { onSubmit: PropTypes.func.isRequired };

  render() {
    return (
      <SearchbarHeader>
        <SearchForm>
          <SearchFormButton type="submit">
            <SearchFormButtonLabel>
              <SearchFormIcon />
            </SearchFormButtonLabel>
          </SearchFormButton>

          <SearchFormInput
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchbarHeader>
    );
  }
}
