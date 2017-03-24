import React from 'react';

export default class Button extends React.Component {
    render() {
        let buttonName = "";
        let buttonStyle = "btn btn-primary";
        if (this.props.buttonName != "" || this.props.buttonName !== undefined) {
            buttonName = this.props.buttonName;
        }
        if (this.props.buttonStyle != "" || this.props.buttonStyle !== undefined) {
            buttonStyle = this.props.buttonStyle;
        }
        return React.createElement(
            "button",
            { className: buttonStyle },
            buttonName
        );
    }
}