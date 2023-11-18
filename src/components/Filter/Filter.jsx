import css from './Filter.module.css';
export default function Filter({ value, onChange }) {
  return (
    <label className={css.filterWrapper}>
      <p>Filter contacts by name:</p>
      <input type="text" name="filter" value={value} onChange={onChange} />
    </label>
  );
}
