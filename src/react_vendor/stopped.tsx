import * as React from 'react';

import ContainerList from './containerList';

interface P {
    containers: Array<any>,
}
export default class Stopped extends React.Component<P, undefined> {
    constructor () {
        super();

        this._getStoppedContainers = this._getStoppedContainers.bind(this);
    }

    _getStoppedContainers(): Array<any> {
       let c = [];
        for (let i in this.props.containers) {
            if (this.props.containers.hasOwnProperty(i)) {
                c.push({
                    State: this.props.containers[i].State,
                    Status: this.props.containers[i].Status,
                    Image: this.props.containers[i].Image,
                    Names: this.props.containers[i].Names,
                    _status: false,
                });
            }
        }
        return c
    }

    render() {
        const containerList = this._getStoppedContainers();
        return (
            <div>
                <ContainerList list={containerList} />
            </div>
        );
    }
}
