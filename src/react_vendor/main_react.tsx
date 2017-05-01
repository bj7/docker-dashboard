import * as React from 'react';

import * as ReactDOM from 'react-dom';

import Perf from 'react-addons-perf';

import Card from './card';

ReactDOM.render(
    <div>
        <Card />
    </div>,
    document.getElementById('myreactcomponent')
);