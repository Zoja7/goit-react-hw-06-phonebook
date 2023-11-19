import ContactItem from 'components/ContactItem/ContactItem';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';

export default function ContactsList() {
  const filter = useSelector(state => state.filtersStore.filters);
  const contacts = useSelector(state => state.contactsStore.contacts);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );

  return (
    <div className={css.contactListWrapper}>
      <ul className={css.contactList}>
        {' '}
        {filteredContacts.map(contact => {
          return <ContactItem key={contact.id} contact={contact} />;
        })}
      </ul>
    </div>
  );
}
