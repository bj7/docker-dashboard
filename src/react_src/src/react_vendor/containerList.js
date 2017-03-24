import React from 'react';

import ContainerItem from './containerItem';

export default class ContainerList extends React.Component {
    render() {
        const output = [];
        for (let i in this.props.list) {
            if (this.props.list.hasOwnProperty(i)) {
                output.push(React.createElement(ContainerItem, null));
            }
        }
        return React.createElement(
            'div',
            null,
            output.length <= 0 ? "No Containers" : output
        );
    }
}

ContainerList.propTypes = {
    list: React.PropTypes.array.isRequired
};

ContainerList.defaultProps = {
    list: []
};