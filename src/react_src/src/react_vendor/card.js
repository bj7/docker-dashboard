import React from 'react';

export default class Card extends React.Component {
    render() {
        return React.createElement(
            "div",
            { className: "container-fluid" },
            React.createElement(
                "div",
                { className: "card-block" },
                React.createElement(
                    "h1",
                    null,
                    "Docker Dashboard"
                ),
                React.createElement(
                    "h4",
                    null,
                    "A dashboard for manipulating you docker containers"
                )
            )
        );
    }
}