import React, { Component } from 'react';
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
import "./viewprofilehead.css"

export class ViewProfileHead extends Component {
    render() {
        return (
            <div className="view-profile-head">
                <div className="img-container">
                    <img src={require("../../assets/images/shapes_and_assets_folder/tech-sample.jpg")} alt="cover"/>
                </div>
                <div className="row-2">
                    <div className="column-1">
                        <Avatar className="round-image" src={require("../../assets/images/shapes_and_assets_folder/Training.png")} alt="user"/>
                    </div>
                    <div className="column-2">
                        <div className="column-2a">
                            <h4>fabrice abunde</h4>
                            <p>Farmer, Douala Cameroon</p>
                            <p>Agrisuites Score <span>34</span></p>
                            <p>Connections <span>200</span></p>
                            <div className="connections">
                                <Link to="#"><Avatar src={require("../../assets/images/shapes_and_assets_folder/team3.jpg")} alt="user"/></Link>
                                <Link to="#"><Avatar src={require("../../assets/images/shapes_and_assets_folder/austin.jpg")} alt="user"/></Link>
                                <Link to="#"><Avatar src={require("../../assets/images/shapes_and_assets_folder/christopher-campbell.jpg")} alt="user"/></Link>
                                <Link to="#" style={{textDecoration: "none"}}><h6>20 mutual Connections</h6></Link>
                            </div>
                        </div>
                        <div className="column-2b">
                            <Link to="#" className="message-btn">{this.props.ButtonName}</Link>
                            <h6>joined june, 2020</h6>
                        </div>
                    </div>
                </div>
                <Link to="#" className="header-url">url:https//Agrisuites.com/Fabrice Abunde</Link>
            </div>
        )
    }
}

export default ViewProfileHead
