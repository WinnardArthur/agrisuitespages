import React, { Component } from 'react';
import './agrimedialog.css';
import { Link } from 'react-router-dom';

class AgrimediaActivityLog extends Component {
    render() {
        return (
            <div className="agrimedia-log">
                <h3 className="row-1">AgriMedia</h3>
                <div className="row-2">
                    <div className="card">
                        <div className="card-header">
                            <h5>draft</h5>
                            <p>May 20 - June 21</p>
                        </div>
                        <div className="card-body">
                            <h1>1000</h1>
                            <p>Number of likes you Executed</p>
                        </div>
                        <div className="card-footer">
                            <p>last month</p>
                            <Link to="#" className="view-all-btn">view all</Link>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                            <h5>submitted</h5>
                            <p>May 20 - June 21</p>
                        </div>
                        <div className="card-body">
                            <h1>300</h1>
                            <p>List of searches in the Last Month</p>
                        </div>
                        <div className="card-footer">
                            <p>last month</p>
                            <Link to="#" className="view-all-btn">view all</Link>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                            <h5>accepted</h5>
                            <p>May 20 - June 21</p>
                        </div>
                        <div className="card-body">
                            <h1>20+</h1>
                            <p>Number of likes you Executed</p>
                        </div>
                        <div className="card-footer">
                            <p>last month</p>
                            <Link to="#" className="view-all-btn">view all</Link>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                            <h5>published</h5>
                            <p>May 20 - June 21</p>
                        </div>
                        <div className="card-body">
                            <h1>80</h1>
                            <p>Number of likes you Executed</p>
                        </div>
                        <div className="card-footer">
                            <p>last month</p>
                            <Link to="#" className="view-all-btn">view all</Link>
                        </div>
                    </div>


                </div>
            </div>
        )
    }
}

export default AgrimediaActivityLog
