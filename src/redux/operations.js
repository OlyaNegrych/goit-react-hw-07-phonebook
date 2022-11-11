import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6368c6be15219b8496067dd6.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
   try {
     const response = await axios.get('/contacts');
     return response.data;
   } catch (e) {
     return thunkAPI.rejectWithValue(e.message);
   }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (text, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', { text });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);


// export const fetchContactById = createAsyncThunk('contacts/fetchAll', async () => {
//   const response = await axios.get(`/${contact_id}`);
//   return response;
// });


// export const fetchContactById = async contact_id => {
//   const response = await axios.get(`/${contact_id}`);

//   try {
//     const response = await axios.get(`/contacts/${contact_id}`);
//     return response;
//   } catch (error) {
//     console.log(error);
//   }
// };
