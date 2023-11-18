import ContactItem from 'components/ContactItem/ContactItem';
import css from './ContactList.module.css';
export default function ContactsList({
  filteredContacts,
  handleDeleteContact,
}) {
  return (
    <div className={css.contactListWrapper}>
      <ul className={css.contactList}>
        {' '}
        {filteredContacts.map(contact => {
          return (
            <ContactItem
              handleDeleteContact={handleDeleteContact}
              key={contact.id}
              contact={contact}
            />
          );
        })}
      </ul>
    </div>
  );
}
