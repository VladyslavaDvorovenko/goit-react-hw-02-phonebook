import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ value, onFilterChange }) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        name="filter"
        value={value}
        onChange={onFilterChange}
      />
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func,
};
