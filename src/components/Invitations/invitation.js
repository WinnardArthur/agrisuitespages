import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './invitation.css'

class Invitation extends Component {
    render() {
        return (
            <div className="invitation">
                <div className="head">
                    <h5>Invitations</h5>
                    <Link to="#">see all 12</Link>
                </div>
                <div className="content">
                    <img src={require("../../assets/images/shapes_and_assets_folder/profileimage.png")} alt="profile"/>
                    <div>
                        <Link to="#" className="username">Marcel Nounbisi</Link>
                        <p>Directeur de farmers house de limbe, distributeur agree</p>
                    </div>
                    <Link to="#" className="ignore-option">Ignore</Link>
                    <Link to="#" className="accept-option">Accept</Link>
                </div>
                <div className="content">
                    <img src={require("../../assets/images/shapes_and_assets_folder/profileimage.png")} alt="profile"/>
                    <div>
                        <Link to="#" className="username">Marcel Nounbisi</Link>
                        <p>Directeur de farmers house de limbe, distributeur agree</p>
                    </div>
                    <Link to="#" className="ignore-option">Ignore</Link>
                    <Link to="#" className="accept-option">Accept</Link>
                </div>
                <div className="content">
                    <img src={require("../../assets/images/shapes_and_assets_folder/profileimage.png")} alt="profile"/>
                    <div>
                        <Link to="#" className="username">Marcel Nounbisi</Link>
                        <p>Directeur de farmers house de limbe, distributeur agree</p>
                    </div>
                    <Link to="#" className="ignore-option">Ignore</Link>
                    <Link to="#" className="accept-option">Accept</Link>
                </div>
                <Link to="#" className="see-more-link">See more</Link>
            </div>
        )
    }
}

export default Invitation
