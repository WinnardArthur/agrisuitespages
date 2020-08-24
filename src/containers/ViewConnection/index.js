import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import UserProfile from '../../components/Userprofile/userprofile';
import Adds from '../../components/Adds/adds';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';




class ViewConnection extends Component {
    render(){
        return(
            <div className="viewConnection">
                <h1 style={{textAlign: "center", fontWeight: "500",marginBottom: "1rem"}}><span style={{color: "red"}}>line of ads</span> passes here:advertising a company</h1>
                <div className="contents">
                    <div className="column1">
                        <UserProfile/>
                    </div>
                    <div className="column2">
                        <div className="row-1">
                            <h5>2000 connections</h5>
                            <div className="search-bar"><i className="fa fa-search"></i><input type="text" placeholder="search connectins" /></div>
                        </div>
                        <div className="row-2">
                            {/* box 1 */}
                            <div className="message">
                                <div className="col-1">
                                    <Avatar src={require("../../assets/images/shapes_and_assets_folder/tech-sample.jpg")} className="round-image"/>
                                    <div>
                                        <h5>Marcel Nounbisi</h5>
                                        <h6>Student</h6>
                                        <p>Agriscore <span>25</span></p>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <i className="fa fa-ellipsis-h"></i>
                                    <Link to="#" className="message">Message</Link>
                                </div>
                            </div>
                            {/* box 2 */}
                            <div className="message">
                                <div className="col-1">
                                    <Avatar src={require("../../assets/images/shapes_and_assets_folder/tech-sample.jpg")} className="round-image"/>
                                    <div>
                                        <h5>Marcel Nounbisi</h5>
                                        <h6>Student</h6>
                                        <p>Agriscore <span>25</span></p>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <i className="fa fa-ellipsis-h"></i>
                                    <Link to="#" className="message">Message</Link>
                                </div>
                            </div>
                            {/* box 3 */}
                            <div className="message">
                                <div className="col-1">
                                    <Avatar src={require("../../assets/images/shapes_and_assets_folder/tech-sample.jpg")} className="round-image"/>
                                    <div>
                                        <h5>Marcel Nounbisi</h5>
                                        <h6>Student</h6>
                                        <p>Agriscore <span>25</span></p>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <i className="fa fa-ellipsis-h"></i>
                                    <Link to="#" className="message">Message</Link>
                                </div>
                            </div>
                            {/* box 4 */}
                            <div className="message">
                                <div className="col-1">
                                    <Avatar src={require("../../assets/images/shapes_and_assets_folder/tech-sample.jpg")} className="round-image"/>
                                    <div>
                                        <h5>Marcel Nounbisi</h5>
                                        <h6>Student</h6>
                                        <p>Agriscore <span>25</span></p>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <i className="fa fa-ellipsis-h"></i>
                                    <Link to="#" className="message">Message</Link>
                                </div>
                            </div>
                            {/* box 5 */}
                            <div className="message">
                                <div className="col-1">
                                    <Avatar src={require("../../assets/images/shapes_and_assets_folder/tech-sample.jpg")} className="round-image"/>
                                    <div>
                                        <h5>Marcel Nounbisi</h5>
                                        <h6>Student</h6>
                                        <p>Agriscore <span>25</span></p>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <i className="fa fa-ellipsis-h"></i>
                                    <Link to="#" className="message">Message</Link>
                                </div>
                            </div>
                            {/* box 6 */}
                            <div className="message">
                                <div className="col-1">
                                    <Avatar src={require("../../assets/images/shapes_and_assets_folder/tech-sample.jpg")} className="round-image"/>
                                    <div>
                                        <h5>Marcel Nounbisi</h5>
                                        <h6>Student</h6>
                                        <p>Agriscore <span>25</span></p>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <i className="fa fa-ellipsis-h"></i>
                                    <Link to="#" className="message">Message</Link>
                                </div>
                            </div>
                            {/* box 7 */}
                            <div className="message">
                                <div className="col-1">
                                    <Avatar src={require("../../assets/images/shapes_and_assets_folder/tech-sample.jpg")} className="round-image"/>
                                    <div>
                                        <h5>Marcel Nounbisi</h5>
                                        <h6>Student</h6>
                                        <p>Agriscore <span>25</span></p>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <i className="fa fa-ellipsis-h"></i>
                                    <Link to="#" className="message">Message</Link>
                                </div>
                            </div>
                            {/* box 8 */}
                            <div className="message">
                                <div className="col-1">
                                    <Avatar src={require("../../assets/images/shapes_and_assets_folder/tech-sample.jpg")} className="round-image"/>
                                    <div>
                                        <h5>Marcel Nounbisi</h5>
                                        <h6>Student</h6>
                                        <p>Agriscore <span>25</span></p>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <i className="fa fa-ellipsis-h"></i>
                                    <Link to="#" className="message">Message</Link>
                                </div>
                            </div>
                            {/* box 9 */}
                            <div className="message">
                                <div className="col-1">
                                    <Avatar src={require("../../assets/images/shapes_and_assets_folder/tech-sample.jpg")} className="round-image"/>
                                    <div>
                                        <h5>Marcel Nounbisi</h5>
                                        <h6>Student</h6>
                                        <p>Agriscore <span>25</span></p>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <i className="fa fa-ellipsis-h"></i>
                                    <Link to="#" className="message">Message</Link>
                                </div>
                            </div>
                            {/* box 10 */}
                            <div className="message">
                                <div className="col-1">
                                    <Avatar src={require("../../assets/images/shapes_and_assets_folder/tech-sample.jpg")} className="round-image"/>
                                    <div>
                                        <h5>Marcel Nounbisi</h5>
                                        <h6>Student</h6>
                                        <p>Agriscore <span>25</span></p>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <i className="fa fa-ellipsis-h"></i>
                                    <Link to="#" className="message">Message</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column3">
                        <Adds/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewConnection
