import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import { Provider } from 'react-redux';
import configureStore from './state/configureStore';

const store = configureStore();

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
