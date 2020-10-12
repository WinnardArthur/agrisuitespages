import React, { Component } from 'react';
import './style.css';
import FarmTvActivityLog from '../../components/FarmTvActivityLog/farmtvactivitylog';
import FarmTvViewActivity from '../../components/FarmTvViewActivity/farmtvviewactivity';
import ActivityPanel from '../../components/ActivityPanel/activitypanel';


class FarmTv extends Component {
    render() {
        return (
            <div className="farm-tv">
                <h2 style={{textAlign: "center", fontWeight: "400",marginBottom: "1rem", textDecoration: "underline"}}>This line is Essentially allowed for an advert statement by the platform</h2>

                <div className="content">
                    <div className="column-1">
                        <ActivityPanel/>
                    </div>
                    <div className="column-2">
                        <div>
                            <FarmTvActivityLog />
                        </div>
                        <div>
                            <FarmTvViewActivity/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FarmTv;
