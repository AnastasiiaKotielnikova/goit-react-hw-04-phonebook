import PropTypes from 'prop-types';
import { Container } from './Filter.styled';

const Filter = ({ text, onInput }) => {
  return (
    <Container>
      <label>
        Find contacts by name
        <input type="text" value={text} onChange={onInput} />
      </label>
    </Container>
  );
};

export default Filter;

Filter.propTypes = {
  text: PropTypes.string,
  onInput: PropTypes.func.isRequired,
};
