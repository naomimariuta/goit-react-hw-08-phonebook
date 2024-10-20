import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import setAxiosDefaults from './setAxiosDefault';
import { notification } from 'antd';

setAxiosDefaults();

const showErrorNotification = (message, description) => {
  notification.error({
    message,
    description,
  });
};

// User Operations
export const register = createAsyncThunk(
  'users/register',
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', {
        name: userData.name,
        email: userData.email,
        password: userData.password,
      });
      const token = response.data.token;
      localStorage.setItem('token', token);
      setAxiosDefaults();
      return response.data.user;
    } catch (error) {
      showErrorNotification(
        'Registration Error',
        'Failed to register. Please try again.'
      );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'users/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', {
        email: credentials.email,
        password: credentials.password,
      });
      const token = response.data.token;
      localStorage.setItem('token', token);
      setAxiosDefaults();
      return response.data.user;
    } catch (error) {
      showErrorNotification(
        'Login Error',
        'Failed to login. Please try again.'
      );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk('users/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    localStorage.removeItem('token');
    setAxiosDefaults();
  } catch (error) {
    showErrorNotification(
      'Logout Error',
      'Failed to logout. Please try again.'
    );
    return thunkAPI.rejectWithValue(error.message);
  }
});

// Contact Operations
export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      showErrorNotification(
        'Fetch Error',
        'Failed to fetch contacts. Please try again.'
      );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', newContact);
      return response.data;
    } catch (error) {
      showErrorNotification(
        'Add Contact Error',
        'Failed to add contact. Please try again.'
      );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      await axios.delete(`/contacts/${contactId}`);
      return contactId;
    } catch (error) {
      showErrorNotification(
        'Delete Contact Error',
        'Failed to delete contact. Please try again.'
      );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
