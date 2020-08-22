import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './pagesuserprofile.css'
import Groups from '../Groups/groups';


class PagesUserProfile extends Component {
    render() {
        return (
            <div className="main  pages-user-profile">
                <div className="userProfile">
                    <div className="imgContainer">
                        <img src={require("../../assets/images/shapes_and_assets_folder/profileimage.png")} alt="profile"/>
                        <div className="text">
                            <h2>habass t</h2>
                            <h6>Student</h6>
                            <h6><i className="fa fa-map-marker"></i>Yaounde, Cameroon</h6>
                        </div>
                    </div>
                    <div className="cardFooter">
                        <div>
                            <Link to="#" className="link link1">Agriscore</Link>
                            <p>64</p>
                        </div>
                        <div>
                            <Link to="#" className="link">Connections</Link>
                            <p>30</p>
                        </div>
                        <div>
                            <Link to="#" className="link">Groups<i className="fa fa-caret-down"></i></Link>
                        </div>
                    </div>
                </div>
                <div>
                    <Groups/>
                </div>
                <div>
                    <Link to="#" className="create-btn"> {this.props.create} +</Link>
                </div>
                <div>
                    <div className="add">
                        <img src={require('../../assets/images/shapes_and_assets_folder/tech-sample2.jpg')} />
                        <h2>Adds</h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default PagesUserProfile
