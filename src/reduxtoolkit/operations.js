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
      const response = await axios.post('/users/signup', userData);
      return response.data;
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
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', userData);
      return response.data;
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
  } catch (error) {
    showErrorNotification(
      'Logout Error',
      'Failed to logout. Please try again.'
    );
    return thunkAPI.rejectWithValue(error.message);
  }
});
