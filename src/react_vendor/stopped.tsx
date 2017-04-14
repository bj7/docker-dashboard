import * as React from 'react';

import ContainerList from './containerList';

export default class Stopped extends React.Component<{}, undefined> {
    _getStoppedContainers(): Array<any> {
        return [];
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
