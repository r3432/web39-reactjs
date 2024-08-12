
import { createRoot } from 'react-dom/client'
import React from 'react';

import { Provider } from 'react-redux';
import { store } from './Store';
import PostsComponent from './post/PostsComponent';


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <PostsComponent />
</Provider>
)
