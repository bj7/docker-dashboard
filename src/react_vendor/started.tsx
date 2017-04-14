import * as React from 'react';

import ContainerList from './containerList';

export interface P {}
export default class Started extends React.Component<P, undefined> {
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
