import { useState } from 'react';
import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import { addContact } from 'redux/contacts/contacts.reducer';
import { useDispatch, useSelector } from 'react-redux';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contactsStore.contacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

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

    dispatch(addContact(newContact));

    setNumber('');
    setName('');
  };

  const handleSubmit = event => {
    event.preventDefault();
    const data = {
      name,
      number,
    };

    if (data.name.trim() !== '' && data.number.trim() !== '') {
      handleAddContact(data);
    }
  };

  const handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;

    switch (name) {
      case 'name': {
        setName(value);
        return;
      }
      case 'number': {
        setNumber(value);
        return;
      }

      default:
        return;
    }
  };

  return (
    <>
      <form className={css.formContainer} onSubmit={handleSubmit}>
        <label className={css.inputWrapper}>
          <p>Name</p>
          <input
            type="text"
            name="name"
            required
            pattern="[a-zA-Zа-яА-ЯіІїЇґҐєЄ']+"
            value={name}
            onChange={event => handleInputChange(event)}
          />
        </label>
        <label className={css.inputWrapper}>
          <p>Number</p>
          <input
            type="tel"
            name="number"
            required
            pattern="^\+?\d{1,4}[ .\-]?\(?\d{1,3}\)?[ .\-]?\d{1,4}[ .\-]?\d{1,4}[ .\-]?\d{1,9}$"
            title="Format: XXX-XXX-XX-XX"
            value={number}
            onChange={event => handleInputChange(event)}
          />
        </label>
        <button className={css.submitButton} type="submit">
          Add contact
        </button>
      </form>
    </>
  );
};

export default ContactForm;
