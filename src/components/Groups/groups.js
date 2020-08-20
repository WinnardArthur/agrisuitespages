import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './groups.css'

class Groups extends Component {
    render() {
        return (
            <div className="groups">
                <div>
                    <div className="card-header">Groups</div>
                    <div className="card-body">
                        <Link to="#" className="group-link"><i className="fa fa-crosshairs groups-icon"></i>Connections</Link>
                        <Link to="#" className="group-link"><i className="fa fa-th groups-icon"></i>Groups</Link>
                        <Link to="#" className="group-link"><i className="fa fa-book groups-icon"></i>Pages</Link>
                        <Link to="#" className="group-link"><i className="fa fa-clone groups-icon"></i>Suggestions</Link>
                        <Link to="#" className="group-link"><i className="fa fa-align-justify groups-icon"></i>Invitations</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Groups
