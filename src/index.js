import React from 'react';
import ReactDOM from 'react-dom';
import DotaRandomApp from './App';
import { Provider } from 'react-redux' 
import configureStore from './store'


const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <DotaRandomApp />
  </Provider>,
  document.getElementById('root')
)
