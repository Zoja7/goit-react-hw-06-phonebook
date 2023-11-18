import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filters: '',
};
const filtersSlice = createSlice({
  // slice`s name
  name: 'filters',
  //initial state of the slice
  initialState,
  //object of the redusers
  reducers: {
    setFilter(state, { payload }) {
      state.filters = payload;
    },
  },
});

//action generator
export const { setFilter } = filtersSlice.actions;
//slice`s reduser
export const filtersReducer = filtersSlice.reducer;
