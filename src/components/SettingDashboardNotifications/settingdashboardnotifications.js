import React, { Component } from 'react';
import './settingdashboardnotifications.css';

class SettingDashboardNotifications extends Component {
    render() {
        return (
            <div className="setting-dashboard-notifications">
                <h4>notifications</h4>
                <p style={{textTransform: "none"}}>Use the checkboxes to choose which email updates you want to receive from agrisuites</p>
                <div>
                    <div className="notification-box">
                        <h4>messaging notifications</h4>
                        <div>
                            <input type="checkbox"/>
                        </div>
                    </div>
                    <div className="notification-box">
                        <h4>connections request</h4>
                        <div>
                            <input type="checkbox"/>
                        </div>
                    </div>
                    <div className="notification-box">
                        <h4>new videos(Farm Tv)</h4>
                        <div>
                            <input type="checkbox"/>
                        </div>
                    </div>
                    <div className="notification-box">
                        <h4>new articles(AgriMedia)</h4>
                        <div>
                            <input type="checkbox"/>
                        </div>
                    </div>
                    <div className="notification-box">
                        <h4>new post</h4>
                        <div>
                            <input type="checkbox"/>
                        </div>
                    </div>
                    <div className="notification-box">
                        <h4>your post</h4>
                        <div>
                            <input type="checkbox"/>
                        </div>
                    </div>
                    <div className="notification-box">
                        <h4>your articles</h4>
                        <div>
                            <input type="checkbox"/>
                        </div>
                    </div>
                    <div className="notification-box">
                        <h4>email notifications</h4>
                        <div>
                            <input type="checkbox"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SettingDashboardNotifications
