import React from 'react';
import ReactDOM from 'react-dom';

import Card from './card';

ReactDOM.render(React.createElement(
    'div',
    null,
    React.createElement(Card, null)
), document.getElementById('myreactcomponent'));