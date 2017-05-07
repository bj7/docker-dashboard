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
            stoppedContainers: [],
            loading: false,
        };

        this.callback = this.callback.bind(this);

        socket.on('containers.list', (containers: any) => {
            console.log("Primary component <Card /> did receive container list from socket connection to server.", containers);

            const partitioned = _.partition(containers, (c: any) => c.State == "running");

            this.setState({
                runningContainers: partitioned[0],
                stoppedContainers: partitioned[1],
                loading: false,
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
        console.log(item);
        console.log(this.setState({
            loading: true,
        }));
        if (item._status !== true && item.btnName == "Stop") {
             socket.emit('containers.stop', {Id: item.Id,});
        } else if (item._status === true && item.btnName == "Start") {
            socket.emit('containers.start', {Id: item.Id,});
        } else if (item.btnName == "Stop All") {
            socket.emit('containers.stopAll');
        }
    }

    componentDidMount () {
        console.log("Primary component: <Card /> did mount.");
        socket.emit('containers.list');
    }

    render () {
        let loader = this.state.loading ? <div className={"overlay"}>
            <div className={"loader"}></div>
        </div> : null;

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
                <div className="container btn-toolbar">
                    <Button buttonName={"Create New"} buttonStyle={"btn btn-primary"} callback={this.callback} />
                    <Button buttonName={"Stop All"} buttonStyle={"btn btn-warning"} callback={this.callback} />
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
                {loader}
            </div>
        );
    }
}
