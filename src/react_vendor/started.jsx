// @flow
import React from 'react';

import ContainerList from './containerList';

export default class Started extends React.Component {
    _getStoppedContainers() {
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
