import React, { Component } from 'react';
import './style.css';
import AgrimediaActivityLog from '../../components/AgriMediaLog/agrimedialog';
import AgrimediaViewActivity from '../../components/AgrimediaViewActivity/agrimediaviewactivity';
import ActivityPanel from '../../components/ActivityPanel/activitypanel';

class AgriMedia extends Component {
    render() {
        return (
            <div className="agrimedia">
                <h2 style={{textAlign: "center", fontWeight: "400",marginBottom: "1rem", textDecoration: "underline"}}>This line is Essentially allowed for an advert statement by the platform</h2>

                <div className="content">
                    <div className="column-1">
                       <ActivityPanel/>
                    </div>
                    <div className="column-2">
                        <div>
                            <AgrimediaActivityLog />
                        </div>
                        <div>
                            <AgrimediaViewActivity/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AgriMedia
