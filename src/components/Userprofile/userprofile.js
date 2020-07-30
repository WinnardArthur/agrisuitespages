import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './userprofile.css'


class UserProfile extends Component {
    render() {
        return (
            <div className="main">
                <div className="userProfile">
                    <div className="greenbar"></div>
                    <div className="imgContainer">
                        <img src={require("../../assets/images/shapes_and_assets_folder/profileimage.png")} alt="profile"/>
                    </div>
                    <ul className="profile-links">
                        <li><Link to="#" className="list-item">Manage my network</Link></li>
                        <li><Link to="#" className="list-item">Contacts</Link></li>
                        <li><Link to="#" className="list-item">People | follow</Link></li>
                        <li><Link to="#" className="list-item">Groups</Link></li>
                        <li><Link to="#" className="list-item">Page</Link></li>
                        <li><Link to="#" className="list-item">News Letter</Link></li>
                        <li><Link to="#" className="list-item">Hastags</Link></li>
                    </ul>
                    <hr className="faint-hr"/>
                    <div className="cardFooter">
                        <p><Link to="#" className="link">Import contacts</Link></p>
                        <div>
                            <Link to="#" className="contact-link">Contact</Link>
                            <Link to="#" className="options-link">More Options</Link>
                        </div>
                    </div>
                    <hr className="thick-hr"/>
                </div>
                <div className="bottomImage">
                    <img src={require("../../assets/images/shapes_and_assets_folder/Training.png")} alt="training"/>
                </div>
            </div>
        )
    }
}

export default UserProfile
