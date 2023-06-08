import PropTypes from 'prop-types';
import {
  Input,
  Label,
  SearchBtn,
  Searchform,
  StyledSearchbar,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit, value }) => {
  const handleSubmit = event => {
    event.preventDefault();
    console.log(value);
    onSubmit(event.target.query.value);
  };
  return (
    <StyledSearchbar className="searchbar">
      <Searchform className="form" onSubmit={handleSubmit}>
        <SearchBtn type="submit" className="button">
          <Label className="button-label">Search</Label>
        </SearchBtn>

        <Input
          name="query"
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          defaultValue={value}
        />
      </Searchform>
    </StyledSearchbar>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
