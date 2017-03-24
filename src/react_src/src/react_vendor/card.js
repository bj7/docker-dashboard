import React from 'react';

import Stopped from './stopped';

import Button from './button';

export default class Card extends React.Component {
    render() {
        return React.createElement(
            'div',
            { className: 'container' },
            React.createElement(
                'div',
                { className: 'row page-header' },
                React.createElement(
                    'div',
                    { className: 'col-lg-12' },
                    React.createElement(
                        'h1',
                        null,
                        'Docker Dashboard'
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'col-lg-12' },
                    React.createElement(
                        'h4',
                        null,
                        'A dashboard for monitoring and manipulating you docker containers'
                    )
                )
            ),
            React.createElement(
                'div',
                { className: 'row' },
                React.createElement(
                    'div',
                    { className: 'col-lg-12' },
                    React.createElement(Button, { buttonName: 'Create New', buttonStyle: 'btn btn-primary' })
                )
            ),
            React.createElement(
                'div',
                { className: 'row' },
                React.createElement(
                    'div',
                    { className: 'col-sm-6' },
                    React.createElement(
                        'h3',
                        null,
                        React.createElement(
                            'u',
                            null,
                            'Stopped'
                        )
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'col-sm-6' },
                    React.createElement(
                        'h3',
                        null,
                        React.createElement(
                            'u',
                            null,
                            'Running'
                        )
                    )
                )
            ),
            React.createElement(
                'div',
                { className: 'row' },
                React.createElement(
                    'div',
                    { className: 'col-sm-6' },
                    React.createElement(Stopped, null)
                ),
                React.createElement('div', { className: 'col-sm-6' })
            )
        );
    }
}