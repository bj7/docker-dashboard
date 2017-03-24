// @flow
import React from 'react';

export default class ContainerItem extends React.Component {
    static defaultProps: Object;

    /**
     * Helper function to determine if the container is running
     */
    isRunning() {
        return this.props._state;
    }

    render() {
        const panelClass    = this.isRunning() ? 'success' : 'default';
        const classes       =  'panel panel-' + panelClass;
        const buttonText    = this.isRunning() ? 'Stop' : 'Start';
        return (
            <div className={classes}>
                <div className="panel-heading">{this.props.name}</div>
                <div className="panel-body">
                    Status: {this.props.status}
                    <br />
                    Image: {this.props.image}
                </div>
                <div className="panel-footer">
                    <button className="btn btn-default">{buttonText}</button>
                </div>
            </div>
        );
    }
}

ContainerItem.defaultProps = {
    name: 'null',
    status: 'null',
    image: 'null',
    _state: false
};
