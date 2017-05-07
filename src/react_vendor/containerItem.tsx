import * as React from 'react';
import Button from './button';

interface P {
    State: string,
    Names: Array<string>,
    Status: string,
    Image: string,
    _status: boolean,
    callback: Function,
    Id: string,
}

export default class ContainerItem extends React.Component<P, undefined> {
    constructor () {
        super();

        this.callback = this.callback.bind(this);
    }
    /**
     * Helper function to determine if the container is running
     */
    isRunning() {
        return this.props._status;
    }

    callback (item: {btnName: string}) {
        this.props.callback({
            btnName: item.btnName,
            curState: this.props.State,
            _status: !this.props._status,
            Id: this.props.Id,
        });
    }

    // Containers should only ever re-render if their _state has changed.
    shouldComponentUpdate (newProps: any) {
        // console.log("Updating container: ", newProps);
        return newProps._status === this.props._status;
    }

    render() {
        const panelClass    = this.isRunning() ? 'success' : 'default';
        const classes       =  'panel panel-' + panelClass;
        const buttonText    = this.isRunning() ? 'Stop' : 'Start';
        const buttonStyle   = 'btn btn-' + (this.props._status === true ? 'danger' : 'success');
        return (
            <div className={classes}>
                <div className="panel-heading"><b>{this.props.Names[0]}</b></div>
                <div className="panel-body">
                    <b>Status</b>: {this.props.Status}
                    <br />
                    <b>Image</b>: {this.props.Image}
                </div>
                <div className="panel-footer">
                    <Button buttonName={buttonText} buttonStyle={buttonStyle} callback={this.callback} />
                </div>
            </div>
        );
    }
}
