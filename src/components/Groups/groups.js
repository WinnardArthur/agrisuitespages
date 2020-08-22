import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './groups.css'

class Groups extends Component {
    render() {
        let items = ['Connections', 'Groups', 'Pages', 'Suggestions', 'Invitations']
        return (
            <div className="groups">
                <div>
                    <div className="card-header">Manage Connections</div>
                    <div className="card-body">
                        <Link to="/viewconnections" className="group-link"><i className="fa fa-crosshairs groups-icon"></i>Connections</Link>
                        <Link to="/viewgroup" className="group-link"><i className="fa fa-th groups-icon"></i>Groups</Link>
                        <Link to="/pagesdisplay" className="group-link" ><i className="fa fa-book groups-icon"></i>Pages</Link>
                        <Link to="#" className="group-link"><i className="fa fa-clone groups-icon"></i>Suggestions</Link>
                        <Link to="#" className="group-link"><i className="fa fa-align-justify groups-icon"></i>Invitations</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Groups
