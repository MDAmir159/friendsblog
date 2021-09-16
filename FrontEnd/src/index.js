import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import history from './history'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore } from 'redux';
import allReducers from './redux/reducers';
import { Provider } from 'react-redux';
import {persistStore, persistReducer} from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'Project',
  storage,
}

const persistedReducer = persistReducer(persistConfig, allReducers);

const store = createStore(persistedReducer);

const persistor = persistStore(store);

ReactDOM.render(
  <Provider store = {store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
