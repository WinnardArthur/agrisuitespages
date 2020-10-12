import React, { Component } from 'react';
import './activitylog.css';
import { Link } from 'react-router-dom';

class ActivityLog extends Component {
    render() {
        return (
            <div className="activity-log">
                <h3 className="row-1">Activity log(20) </h3>
                <div className="row-2">
                    <div className="card">
                        <div className="card-header">
                            <h5>likes</h5>
                            <p>May 20 - June 21</p>
                        </div>
                        <div className="card-body">
                            <h1>300<i className="fa fa-thumbs-up"></i></h1>
                            <p>Number of likes you Executed</p>
                        </div>
                        <div className="card-footer">
                            <p>last month</p>
                            <Link to="#" className="view-all-btn">view all</Link>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                            <h5>searches</h5>
                            <p>May 20 - June 21</p>
                        </div>
                        <div className="card-body">
                            <h1>20+<i className="fa fa-search"></i></h1>
                            <p>List of searches in the Last Month</p>
                        </div>
                        <div className="card-footer">
                            <p>last month</p>
                            <Link to="#" className="view-all-btn">view all</Link>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                            <h5>connections</h5>
                            <p>May 20 - June 21</p>
                        </div>
                        <div className="card-body">
                            <h1>80<i className="fa fa-users"></i></h1>
                            <p>Number of likes you Executed</p>
                        </div>
                        <div className="card-footer">
                            <p>last month</p>
                            <Link to="#" className="view-all-btn">view all</Link>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                            <h5>comments</h5>
                            <p>May 20 - June 21</p>
                        </div>
                        <div className="card-body">
                            <h1>1000<i className="fa fa-comment"></i></h1>
                            <p>Number of likes you Executed</p>
                        </div>
                        <div className="card-footer">
                            <p>last month</p>
                            <Link to="#" className="view-all-btn">view all</Link>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                            <h5>articles</h5>
                            <p>May 20 - June 21</p>
                        </div>
                        <div className="card-body">
                            <h1>15<i className="fa fa-sticky-note"></i></h1>
                            <p>Number of likes you Executed</p>
                        </div>
                        <div className="card-footer">
                            <p>last month</p>
                            <Link to="#" className="view-all-btn">view all</Link>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                            <h5>post</h5>
                            <p>May 20 - June 21</p>
                        </div>
                        <div className="card-body">
                            <h1>35<i className="fa fa-sticky-note"></i></h1>
                            <p>Number of post</p>
                        </div>
                        <div className="card-footer">
                            <p>last month</p>
                            <Link to="#" className="view-all-btn">view all</Link>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                            <h5>trash</h5>
                            <p>May 20 - June 21</p>
                        </div>
                        <div className="card-body">
                            <h1>20+<i className="fa fa-trash"></i></h1>
                            <p>List of searches in the Last Month</p>
                        </div>
                        <div className="card-footer">
                            <p>last month</p>
                            <Link to="#" className="view-all-btn">view all</Link>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                            <h5>archieve</h5>
                            <p>May 20 - June 21</p>
                        </div>
                        <div className="card-body">
                            <h1>80<i className="fa fa-archive"></i></h1>
                            <p>Number of likes you Executed</p>
                        </div>
                        <div className="card-footer">
                            <p>last month</p>
                            <Link to="#" className="view-all-btn">view all</Link>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                            <h5>replies</h5>
                            <p>May 20 - June 21</p>
                        </div>
                        <div className="card-body">
                            <h1>1000<i className="fa fa-comment"></i></h1>
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

export default ActivityLog
