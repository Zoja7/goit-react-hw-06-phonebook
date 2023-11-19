import { useDispatch, useSelector } from 'react-redux';
import css from './Filter.module.css';
import { setFilter } from 'redux/filters/filters.redux';
export default function Filter() {
  const dispatch = useDispatch();

  const filter = useSelector(state => state.filtersStore.filters);
  const handleFilterChange = event => {
    const value = event.target.value;
    dispatch(setFilter(value));
  };

  return (
    <label className={css.filterWrapper}>
      <p>Filter contacts by name:</p>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={event => handleFilterChange(event)}
      />
    </label>
  );
}
