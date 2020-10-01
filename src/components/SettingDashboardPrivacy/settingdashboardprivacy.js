import React, { Component } from 'react';
import './settingdashboardprivacy.css';
import { Link } from 'react-router-dom';


class SettingDashboardPrivacy extends Component {
    render() {
        return (
            <div className="setting-dashboard-privacy">
                <div className="privacy-header">
                    <h4 className="header-text">privacy</h4>
                    <select className="gray-bg">
                            <option>Everyone</option>
                            <option>Nobody</option>
                            <option>Friends</option>
                    </select>
                </div>
                
                <div className="links">
                    <Link to="#" className="link">about you</Link>
                    <Link to="#" className="link">basic information</Link>
                    <Link to="#" className="link">contact information</Link>
                    <Link to="#" className="link">your articles</Link>
                </div>
                <div className="content">
                    <div className="profile-picture-settings">
                        <h4>your public profile</h4>
                        <p>Your public profile can be viewed by visitors on Agrisuites, all privacy....</p>
                        <div className="check-settings">
                            <input type="checkbox"/>
                            <p>Enable your public profile</p>
                        </div>
                        <h5 className="gray-bg">https://Agrisuites.com/profile/Fabrice A</h5>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default SettingDashboardPrivacy
