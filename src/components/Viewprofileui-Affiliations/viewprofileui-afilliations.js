import React, { Component } from 'react';
import './viewprofileui-afilliations.css';
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";


class ViewprofileuiAfilliations extends Component {
    render() {
        return (
            <div className="viewprofileui-afilliations">
                <div className="row-1">
                    afilliations
                </div>
                <div className="row-2">
                    {/* Row 1 */}
                    <div className="sub-row">
                        <div className="imgContainer">
                            <Avatar className="img" src={require("../../assets/images/shapes_and_assets_folder/coding-bg.jpg")} alt="project"/>
                        </div>
                        <div className="description">
                            <h5>projects extension director</h5>
                            <div className="row">
                                <Link to="#" className="link">The COCOgroup</Link>
                                <Link to="#" className="view-btn">view page</Link>
                            </div>
                            <p className="date">Jan 2017-Present (3 yrs, 4 mon)</p>
                            <p className="info">Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</p>
                            <div><Link className="read-more" to="#">...Read more</Link></div>
                        </div>
                    </div>
                    {/* Row 2 */}
                    <div className="sub-row">
                        <div className="imgContainer">
                            <Avatar className="img" src={require("../../assets/images/shapes_and_assets_folder/coding-bg.jpg")} alt="project"/>
                        </div>
                        <div className="description">
                            <h5>projects extension director</h5>
                            <div className="row">
                                <Link to="#" className="link">The COCOgroup</Link>
                                <Link to="#" className="view-btn">view page</Link>
                            </div>
                            <p className="date">Jan 2017-Present (3 yrs, 4 mon)</p>
                            <p className="info">Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</p>
                            <div><Link className="read-more" to="#">...Read more</Link></div>
                        </div>
                    </div>
                    
                </div>
                <Link to="#" className="see-more">See more Afilliations<i className="fa fa-caret-down"></i></Link>
            </div>
        )
    }
}

export default ViewprofileuiAfilliations
