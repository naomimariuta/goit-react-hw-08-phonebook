import React from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import store from 'reduxtoolkit/store';
import App from './components/App';
import './index.css';

const root = createRoot(document.getElementById('root'));

root.render(
  <ChakraProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </ChakraProvider>
);
