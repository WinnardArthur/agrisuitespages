import React, { Component } from 'react';
import './farmtvactivitylog.css';
import { Link } from 'react-router-dom';

class FarmTvActivityLog extends Component {
    render() {
        return (
            <div className="farmTv-activity-log">
                <h3 className="row-1">Farm Tv</h3>
                <div className="row-2">

                    <div className="card">
                        <div className="card-header">
                            <h5>submitted videos</h5>
                            <p>May 20 - June 21</p>
                        </div>
                        <div className="card-body">
                            <h1>10</h1>
                            <p>Number of likes you Executed</p>
                        </div>
                        <div className="card-footer">
                            <p>last month</p>
                            <Link to="#" className="view-all-btn">view all</Link>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                            <h5>approved videos</h5>
                            <p>May 20 - June 21</p>
                        </div>
                        <div className="card-body">
                            <h1>7</h1>
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

export default FarmTvActivityLog
