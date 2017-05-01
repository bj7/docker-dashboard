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
        return this.props.containers || [];
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
