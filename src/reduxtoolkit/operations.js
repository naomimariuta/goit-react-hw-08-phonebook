import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { notification } from 'antd';

const API_URL = 'https://connections-api.goit.global';

const showErrorNotification = (message, description) => {
  notification.error({
    message,
    description,
  });
};

// User Operations
export const register = createAsyncThunk(
  'auth/register',
  async (userData, { rejectWithValue }) => {
    console.log(userData);
    try {
      const response = await axios.post(`${API_URL}/users/signup`, {
        name: userData.name,
        email: userData.email,
        password: userData.password,
      });

      const token = response.data.token;
      localStorage.setItem('token', token);
      return response.data.user;
    } catch (error) {
      showErrorNotification(
        'Registration Error',
        'Failed to register. Please try again.'
      );
      return rejectWithValue(
        error.response.data.message || 'Registration failed'
      );
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/users/login`, {
        email: credentials.email,
        password: credentials.password,
      });
      const token = response.data.token;
      localStorage.setItem('token', token);
      return response.data.user;
    } catch (error) {
      showErrorNotification(
        'Login Error',
        'Failed to login. Please try again.'
      );
      return rejectWithValue(error.response.data.message || 'Login failed');
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async () => {
  const token = localStorage.getItem('token');
  try {
    await axios.post(
      `${API_URL}/users/logout`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    localStorage.removeItem('token');
  } catch (error) {
    console.error('Logout failed:', error);
    showErrorNotification(
      'Logout Error',
      'Failed to logout. Please try again.'
    );
  }
});

// Contact Operations
export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.get(`${API_URL}/contacts`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
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
    const token = localStorage.getItem('token');
    try {
      const response = await axios.post(`${API_URL}/contacts`, newContact, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
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
    const token = localStorage.getItem('token');
    try {
      await axios.delete(`${API_URL}/contacts/${contactId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
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
