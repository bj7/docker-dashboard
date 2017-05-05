import * as React from 'react';

import ContainerItem from './containerItem';

interface P {
    list: {
        _status: boolean,
        Status: string,
        Image: string,
        Names: Array<string>,
        State: string,
        Id: string
    }[],
    callback: Function,
}

export default class ContainerList extends React.Component<P, undefined> {
    render() {
        const output: Array<any> = [];
        for (let i in this.props.list) {
            if (this.props.list.hasOwnProperty(i)) {
                output.push(<ContainerItem key={i} _status={this.props.list[i]._status}
                    Names={this.props.list[i].Names} Status={this.props.list[i].Status}
                    Image={this.props.list[i].Image} State={this.props.list[i].State}
                    callback={this.props.callback}
                    Id={this.props.list[i].Id} />);
            }
        }
        return (
            <div>
                {output.length <= 0 ? "No Containers" : output}
            </div>
        );
    }
}
