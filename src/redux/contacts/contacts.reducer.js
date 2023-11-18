import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // contacts: JSON.parse(localStorage.getItem('contacts')) ?? [],
  contacts: [],
};
const contactsSlice = createSlice({
  // slice`s name
  name: 'contacts',
  // initial state of the slice
  initialState,
  // object of the redusers
  reducers: {
    addContact(state, { payload }) {
      state.contacts = [...state.contacts, payload];
      //   state.contacts.push(payload);
    },
    deleteContact(state, { payload }) {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },
  },
});

// action generator
export const { deleteContact, addContact } = contactsSlice.actions;
// slice`s reduser
export const contactsReducer = contactsSlice.reducer;
