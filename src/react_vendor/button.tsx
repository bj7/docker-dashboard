import * as React from 'react';

interface P {
    buttonName: string,
    buttonStyle: string,
    callback: Function,
};

export default class Button extends React.PureComponent<P, undefined> {
    constructor () {
        super();
        this.callback = this.callback.bind(this);
    }

    callback () {
        this.props.callback({
            name: this.props.buttonName,
        });
    }

    render () {
        let buttonName = this.props.buttonName || "";
        let buttonStyle = this.props.buttonStyle || "btn btn-primary";

        return (
            <button className={buttonStyle} onClick={this.callback}>
                {buttonName}
            </button>
        )
    }
}
