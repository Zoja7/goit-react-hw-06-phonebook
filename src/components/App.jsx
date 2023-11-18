// import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { addContact, deleteContact } from 'redux/contacts/contacts.reducer';
import { setFilter } from 'redux/filters/filters.redux';
import { useDispatch, useSelector } from 'react-redux';

import ContactForm from './ContactForm/ContactForm';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import css from './App.module.css';

export const App = () => {
  // const [filter, setFilter] = useState('');
  // const [contacts, setContacts] = useState(() => {
  //   const stringifiedContacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(stringifiedContacts) ?? [];
  //   return parsedContacts;
  // });
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contactsStore.contacts);
  const filter = useSelector(state => state.filtersStore.filters);
  // useEffect(() => {
  //   const stringifiedContacts = JSON.stringify(contacts);
  //   localStorage.setItem('contacts', stringifiedContacts);
  // }, [contacts]);

  const handleAddContact = data => {
    const hasDuplicated = contacts.some(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );
    if (hasDuplicated) {
      alert(`'${data.name}' is already in contacts!`);
      return;
    }
    const newContact = {
      id: nanoid(),
      ...data,
    };

    // setContacts(prevState => [...prevState, newContact]);
    dispatch(addContact(newContact));
  };

  const handleDeleteContact = contactId => {
    // setContacts(prevState =>
    //   prevState.filter(contact => contact.id !== contactId)
    dispatch(deleteContact(contactId));
  };

  const handleFilterChange = event => {
    const value = event.target.value;
    dispatch(setFilter(value));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );

  return (
    <div className={`${css.container} ${css.sectionWrapper}`}>
      <h1 className={css.phoneBookTitle}>Phonebook</h1>
      <ContactForm handleAddContact={handleAddContact} contacts={contacts} />
      <h2 className={css.contactsTitle}>Contacts</h2>
      <Filter value={filter} onChange={handleFilterChange} />
      <ContactsList
        filteredContacts={filteredContacts}
        handleDeleteContact={handleDeleteContact}
      />
    </div>
  );
};
