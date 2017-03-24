// @flow
import React from 'react';

import ContainerItem from './containerItem';

export default class ContainerList extends React.Component {
    static defaultProps: Object;
    render() {
        const output = [];
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

ContainerList.propTypes = {
    list: React.PropTypes.array.isRequired
};

ContainerList.defaultProps = {
    list: []
};
