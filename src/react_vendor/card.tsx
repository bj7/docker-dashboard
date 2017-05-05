import * as React from 'react';

import * as io from 'socket.io-client';

import * as _ from 'underscore';

import Stopped from './stopped';

import Started from './started';

import Button from './button';

const socket = io.connect();
export interface CardProps {}
export default class Card extends React.Component<CardProps, any> {
    constructor() {
        super();
        this.state = {
            runningContainers: [],
            stoppedContainers: []
        };

        this.callback = this.callback.bind(this);

        socket.on('containers.list', (containers: any) => {
            console.log("Primary component <Card /> did receive container list from socket connection to server.", containers);

            const partitioned = _.partition(containers, (c: any) => c.State == "running");

            this.setState({
                runningContainers: partitioned[0],
                stoppedContainers: partitioned[1]
            });
        });
    }

    /**
     * @description Handles button callbacks and enables appropriate logic.
     * 
     * @param {{btnName: string, _status: boolean, Id: string}} item - Object that contains the properties of the
     * container/button that was clicked.
     * 
     * @memberof Card
     */
    callback (item: {btnName: string, _status: boolean, Id: string}) {
        let newState = Object.assign({}, {
            runningContainers: this.state.runningContainers,
            stoppedContainers: this.state.stoppedContainers,
        });
        let temp = Object.assign([], this.state.runningContainers);
        if (item._status !== true && item.btnName == "Stop") {
            for (var i in this.state.runningContainers) {
                if (this.state.runningContainers.hasOwnProperty(i)) {
                    if (this.state.runningContainers[i].Id == item.Id) {
                        let t = temp.splice(i, 1);
                        newState.stoppedContainers.push(t[0]);
                        newState.runningContainers = temp;
                    }
                }
            }
        } else {
            temp = Object.assign([], this.state.stoppedContainers);
            // let tempRunning = Object.assign([], this.state.runningContainers);
            for (var i in this.state.stoppedContainers) {
                if (this.state.stoppedContainers.hasOwnProperty(i)) {
                    if (this.state.stoppedContainers[i].Id == item.Id) {
                        let t = temp.splice(i, 1);
                        newState.runningContainers.push(t[0]);
                        newState.stoppedContainers = temp;
                    }
                }
            }
        }

        this.setState({
            runningContainers: newState.runningContainers,
            stoppedContainers: newState.stoppedContainers,
        });
    }

    componentDidMount() {
        console.log("Primary component: <Card /> did mount.");
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
                    <Button buttonName={"Create New"} buttonStyle={"btn btn-primary"} callback={this.callback} />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <h3><u>Stopped</u></h3>
                            <div className="row">
                                <div className="col-sm-12">
                                    <Stopped containers={this.state.stoppedContainers} callback={this.callback} />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <h3><u>Running</u></h3>
                            <div className="row">
                                <div className="col-sm-12">
                                    <Started containers={this.state.runningContainers} callback={this.callback} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
