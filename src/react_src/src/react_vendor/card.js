import React from 'react';

import * as io from 'socket.io-client';

import _ from 'underscore';

import Stopped from './stopped';

import Started from './started';

import Button from './button';

const socket = io.connect();

export default class Card extends React.Component {
    constructor() {
        super();
        this.state = {
            containers: [],
            stoppedContainers: []
        };

        socket.on('containers.list', containers => {
            console.log("Primary component <Card /> did receive container list from socket connection to server.", containers);

            const partitioned = _.partition(containers, c => c.State == "running");
            console.log("Partitioned", partitioned);
            this.setState({
                containers: partitioned[0],
                stoppedContainers: partitioned[1]
            });
        });
    }

    componentDidMount() {
        console.log("Primary component: <Card /> did mount.");
        socket.emit('containers.list');
    }

    separateContainers(containers) {}

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
                { className: 'container' },
                React.createElement(Button, { buttonName: 'Create New', buttonStyle: 'btn btn-primary' })
            ),
            React.createElement(
                'div',
                { className: 'container' },
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
                        ),
                        React.createElement(
                            'div',
                            { className: 'row' },
                            React.createElement(
                                'div',
                                { className: 'col-sm-12' },
                                React.createElement(Stopped, null)
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
                        ),
                        React.createElement(
                            'div',
                            { className: 'row' },
                            React.createElement(
                                'div',
                                { className: 'col-sm-12' },
                                React.createElement(Started, null)
                            )
                        )
                    )
                )
            )
        );
    }
}