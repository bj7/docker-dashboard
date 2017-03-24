import React from 'react';

export default class ContainerItem extends React.Component {

    /**
     * Helper function to determine if the container is running
     */
    isRunning() {
        return this.props._state;
    }

    render() {
        const panelClass = this.isRunning() ? 'success' : 'default';
        const classes = 'panel panel-' + panelClass;
        const buttonText = this.isRunning() ? 'Stop' : 'Start';
        return React.createElement(
            'div',
            { className: classes },
            React.createElement(
                'div',
                { className: 'panel-heading' },
                this.props.name
            ),
            React.createElement(
                'div',
                { className: 'panel-body' },
                'Status: ',
                this.props.status,
                React.createElement('br', null),
                'Image: ',
                this.props.image
            ),
            React.createElement(
                'div',
                { className: 'panel-footer' },
                React.createElement(
                    'button',
                    { className: 'btn btn-default' },
                    buttonText
                )
            )
        );
    }
}

ContainerItem.defaultProps = {
    name: 'null',
    status: 'null',
    image: 'null',
    _state: false
};