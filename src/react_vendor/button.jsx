import React from 'react';

export default class Button extends React.Component {
    buttonName: React.PropTypes.string;
    buttonStyle: React.PropTypes.string;
    render() {
        let buttonName = "";
        let buttonStyle = "btn btn-primary";
        if (this.props.buttonName != "" || this.props.buttonName !== undefined) {
            buttonName = this.props.buttonName;
        }
        if (this.props.buttonStyle != "" || this.props.buttonStyle !== undefined) {
            buttonStyle = this.props.buttonStyle;
        }
        return (
            <button className={buttonStyle}>
                {buttonName}
            </button>
        );
    }
}
