import React, { Component } from 'react';
import './pagesactivitylog.css';
import { Link } from 'react-router-dom';

class PagesActivityLog extends Component {
    render() {
        return (
            <div className="pages-activity-log">
                <h3 className="row-1">Page Name </h3>
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
                            <h5>followers</h5>
                            <p>May 20 - June 21</p>
                        </div>
                        <div className="card-body">
                            <h1>20+<i className="fa fa-users"></i></h1>
                            <p>List of searches in the Last Month</p>
                        </div>
                        <div className="card-footer">
                            <p>last month</p>
                            <Link to="#" className="view-all-btn">view all</Link>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                            <h5>notifications</h5>
                            <p>May 20 - June 21</p>
                        </div>
                        <div className="card-body">
                            <h1>80<i className="fa fa-bell"></i></h1>
                            <p>Number of likes you Executed</p>
                        </div>
                        <div className="card-footer">
                            <p>last month</p>
                            <Link to="#" className="view-all-btn">view all</Link>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                            <h5>page views</h5>
                            <p>May 20 - June 21</p>
                        </div>
                        <div className="card-body">
                            <h1>1000<i className="fa fa-sticky-note"></i></h1>
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

export default PagesActivityLog
