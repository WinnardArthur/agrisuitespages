import React, { Component } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import SettingDashboardAccountSetting from '../../components/SettingDashboardAccountSettings/settingdashboardaccountsetting';

class SettingDashboard extends Component {
    render() {
        return (
            <div className="setting-dashboard">
                <div className="header-section">
                    <h1>settings</h1>
                </div>
                <div className="body-section">
                    <div className="column-1">
                        <Link to="/setting-dashboard" className="setting-link">
                            <i className="fa fa-user-circle"></i>
                            <h4>account</h4>
                        </Link>
                        <Link to="/setting-dashboard-notifications" className="setting-link">
                            <i className="fa fa-bell"></i>
                            <h4>notifications</h4>
                        </Link>
                        <Link to="/setting-dashboard-privacy" className="setting-link">
                            <i className="fa fa-lock"></i>
                            <h4>privacy</h4>
                        </Link>
                    </div>
                    <div className="column-2">
                        <div>
                            <SettingDashboardAccountSetting/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SettingDashboard
