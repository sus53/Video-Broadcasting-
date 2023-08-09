import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import User from './reducers/User';
import Watch from './reducers/Watch';
import Category from './reducers/Category';
import Comment from './reducers/Comment';
import Video from './reducers/Video';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = configureStore({
  reducer: {
    User,
    Watch,
    Category,
    Comment,
    Video
  }
})
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
