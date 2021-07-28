import React from 'react';
import ReactDOM from 'react-dom';
import { Routers } from './routers/Routers';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import { Provider } from 'react-redux';
import {store} from './components/store/store'

ReactDOM.render(
  <Provider store={store}>
    <Routers />
  </Provider>,
  document.getElementById('root')
);


