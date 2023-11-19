import { deleteContact } from 'redux/contacts/contacts.reducer';
import css from './ContactItem.module.css';
import { ReactComponent as IconTrash } from 'assets/icons/trashSvg.svg';
import { useDispatch } from 'react-redux';
export default function ContactItem({ contact }) {
  const dispatch = useDispatch();

  const { name, number, id } = contact;
  const handleDeleteContact = () => {
    dispatch(deleteContact(id));
  };
  return (
    <li className={css.contactItem}>
      <span className={css.contactName}>{name}</span>
      <span className={css.contactNumber}> {number}</span>

      <button
        className={css.deleteButton}
        type="button"
        onClick={() => {
          handleDeleteContact(id);
        }}
      >
        <IconTrash className={css.svgIcon} />
      </button>
    </li>
  );
}
