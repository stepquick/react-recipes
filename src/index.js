import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import configureStore from './configureStore';

import Root from './views/app';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

render(
    <Provider store={store}>
        <Root />
    </Provider>, 
    document.getElementById('root')
);

registerServiceWorker();
