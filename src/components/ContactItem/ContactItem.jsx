import css from './ContactItem.module.css';
import { ReactComponent as IconTrash } from 'assets/icons/trashSvg.svg';
export default function ContactItem({ contact, handleDeleteContact }) {
  return (
    <li className={css.contactItem}>
      <span className={css.contactName}>{contact.name}:</span>
      <span className={css.contactNumber}> {contact.number}</span>

      <button
        className={css.deleteButton}
        type="button"
        onClick={() => {
          handleDeleteContact(contact.id);
        }}
      >
        <IconTrash className={css.svgIcon} />
      </button>
    </li>
  );
}
