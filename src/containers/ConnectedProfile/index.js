import React, { Component } from 'react';
import ViewprofileuiSidebar from '../../components/Viewprofileui-Sidebar/viewprofileui-sidebar';
import ViewProfileHead from '../../components/ViewProfileUIHead/viewprofilehead';
import ViewprofileuiMaincontent from '../../components/ViewProfileUiMainContent/viewprofileui-maincontent';
import './style.css'

export class ConnectedProfile extends Component {
    render() {
        return (
            <div className="connected-profile">
                <h2 style={{textAlign: "center", fontWeight: "400",marginBottom: "1rem", textDecoration: "underline"}}><span style={{color: "#006633"}}>This line is Essentially</span> allowed for an advert statement by the platform</h2>
                <div className="content">
                    <div>
                        <ViewProfileHead ButtonName="Message"/>
                    </div>
                    <div className="body">
                        <div className="main-content">
                            <ViewprofileuiMaincontent/>
                        </div>
                        <div className="sidebar">
                            <ViewprofileuiSidebar/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ConnectedProfile
