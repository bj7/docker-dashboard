import * as React from 'react';

import ContainerItem from './containerItem';

interface P {
    list: Array<any>,
}

export default class ContainerList extends React.Component<P, undefined> {
    render() {
        const output: Array<any> = [];
        for (let i in this.props.list) {
            if (this.props.list.hasOwnProperty(i)) {
                output.push(<ContainerItem />);
            }
        }
        return (
            <div>
                {output.length <= 0 ? "No Containers" : output}
            </div>
        );
    }
}
