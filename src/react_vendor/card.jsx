// @flow
import React from 'react';

import Stopped from './stopped';

import Button from './button';

export default class Card extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row page-header">
                    <div className="col-lg-12">
                        <h1>Docker Dashboard</h1>
                    </div>
                    <div className="col-lg-12">
                        <h4>A dashboard for monitoring and manipulating you docker containers</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <Button buttonName="Create New" buttonStyle="btn btn-primary" />
                    </div>
                    <div className="col-sm-6">
                        <h3><u>Stopped</u></h3>
                    </div>
                    <div className="col-sm-6">
                        <h3><u>Running</u></h3>
                    </div>
                </div>
            </div>
        );
    }
}
