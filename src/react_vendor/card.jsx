// @flow
import React from 'react';

export default class Card extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="card-block">
                    <h1>Docker Dashboard</h1>
                    <h4>A dashboard for manipulating you docker containers</h4>
                </div>
            </div>
        );
    }
}
