import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import './index.css';
import MovieApp from './MovieApp';
import store from './store';

ReactDOM.render(<Provider store={store}><MovieApp /></Provider>,document.getElementById('root'));
