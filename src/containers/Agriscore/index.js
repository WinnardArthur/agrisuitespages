import React, { Component } from 'react';
import './style.css';
import PagesActivityLog from '../../components/PagesActivityLog/pagesactivitylog';
import ViewActivity from '../../components/ViewActivity/viewactivity';
import ActivityPanel from '../../components/ActivityPanel/activitypanel';


class Agriscore extends Component {
    render() {
        return (
            <div className="agriscore">
                <h2 style={{textAlign: "center", fontWeight: "400",marginBottom: "1rem", textDecoration: "underline"}}>This line is Essentially allowed for an advert statement by the platform</h2>

                <div className="content">
                    <div className="column-1">
                        <ActivityPanel/>
                    </div>
                    <div className="column-2">
                        <div className="notice">
                            <h1>coming soon!</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Agriscore;
