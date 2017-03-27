// @flow
import React from 'react';

import * as io from 'socket.io-client';

import Stopped from './stopped';

import Started from './started';

import Button from './button';

type State = any;
type Props = any;

const socket = io.connect();

export default class Card extends React.Component<void, Props, State> {
    constructor() {
        super();
        this.state = {
            containers: [],
            stoppedContainers: []
        };

        socket.on('containers.list', (containers: any) => {
            console.log(containers);
            this.setState({
                containers: containers
            });
        });
    }

    componentDidMount() {
        console.log("componentDidMount");
        socket.emit('containers.list');
    }

    render() {
        return (
            <div className="container">
                <div className="row page-header">
                    <div className="col-lg-12">
                        <h1>Docker Dashboard</h1>
                    </div>
                    <div className="col-lg-12">
                        <h4>A dashboard for monitoring and manipulating you docker containers</h4>
                    </div>
                </div>
                <div className="container">
                    <Button buttonName="Create New" buttonStyle="btn btn-primary" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <h3><u>Stopped</u></h3>
                            <div className="row">
                                <div className="col-sm-12">
                                    <Stopped />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <h3><u>Running</u></h3>
                            <div className="row">
                                <div className="col-sm-12">
                                    <Started />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
