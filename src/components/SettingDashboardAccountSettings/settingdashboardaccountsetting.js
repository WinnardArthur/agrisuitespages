import React, { Component } from 'react';
import './settingdashboardaccountsetting.css';
import { Link } from 'react-router-dom';

class SettingDashboardAccountSetting extends Component {
    render() {
        return (
            <div className="setting-dashboard-account-setting">
                <div className="setting-account">
                    <h2>account setting</h2>
                    <div className="row-1">
                        <h6>Email address</h6>
                        <h5>Primary email <span>fabriceabunde@gmail.com</span></h5>
                        <button>
                            <div className="plus-icon"><i className="fa fa-plus-circle"></i></div>
                            <h4>Add additional email</h4>
                        </button>
                    </div>
                    <div className="row-2">
                        <h6>password</h6>
                        <h4>We suggest you use a strong password combining</h4>
                        <Link to="#" className="change-password-btn">change password</Link>
                    </div>
                </div>
                <div className="delete-account">
                    <h4>Delete your account</h4>
                    <h5>Are you sure you want to delete your account?</h5>
                    <div>
                        <h4>Please Note: <span style={{color: "red"}}>Your account will be completely deleted from this site.</span></h4>
                        <Link to="#" className="delete-account-btn">Delete account</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default SettingDashboardAccountSetting
