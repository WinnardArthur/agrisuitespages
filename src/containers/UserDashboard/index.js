import React, { Component } from 'react';
import './style.css';
import ActivityLog from '../../components/ActivityLog/activitylog';
import ViewActivity from '../../components/ViewActivity/viewactivity';
import ActivityPanel from '../../components/ActivityPanel/activitypanel';

class UserDashboard extends Component {
    render() {
        return (
            <div className="user-dashboard">
                <h2 style={{textAlign: "center", fontWeight: "400",marginBottom: "1rem", textDecoration: "underline"}}>This line is Essentially allowed for an advert statement by the platform</h2>

                <div className="content">
                    <div className="column-1">
                        <ActivityPanel/>
                    </div>
                    <div className="column-2">
                        <div>
                            <ActivityLog />
                        </div>
                        <div>
                            <ViewActivity/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserDashboard
