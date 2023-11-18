import { configureStore } from '@reduxjs/toolkit';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactsReducer } from './contacts/contacts.reducer';
import { filtersReducer } from './filters/filters.redux';

const contactsConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
  // blacklist: ['isLoading', 'error'],
};

export const store = configureStore({
  reducer: {
    contactsStore: persistReducer(contactsConfig, contactsReducer),
    filtersStore: filtersReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
