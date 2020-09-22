import React, { Component } from 'react';
import "./viewprofileui-sidebar.css";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar"


class ViewprofileuiSidebar extends Component {
    render() {
        return (
            <div className="viewprofileui-sidebar">
                <div>
                    <div className="view-digital-tools">
                        <h3 className="title">View our digital tools</h3>
                        <div className="icons">
                            <Link to="#" className="icon"><i className="fa fa-facebook"></i></Link>
                            <Link to="#" className="icon"><i className="fa fa-facebook"></i></Link>
                            <Link to="#" className="icon"><i className="fa fa-facebook"></i></Link>
                            <Link to="#" className="icon"><i className="fa fa-facebook"></i></Link>
                            <Link to="#" className="icon"><i className="fa fa-facebook"></i></Link>
                            <Link to="#" className="icon"><i className="fa fa-facebook"></i></Link>
                        </div>
                        <img src={require("../../assets/images/shapes_and_assets_folder/tech-sample2.jpg")} alt="digital-tools"/>
                    </div>
                    <div className="recommended-pages">
                        <h3 className="title">Recommended Pages</h3>
                        <div>
                            <div className="content">
                                <Avatar className="img" src={require("../../assets/images/shapes_and_assets_folder/team3.jpg")} alt="pages-icon"  />
                                <div>
                                    <h4>FAO</h4>
                                    <Link to="#" className="category">crop production</Link>
                                    <p>10K followers</p>
                                </div>
                                <Link to="#" className="follow-btn">+ Follow</Link>
                            </div>
                            <div className="content">
                                <Avatar className="img" src={require("../../assets/images/shapes_and_assets_folder/christopher-campbell.jpg")} alt="pages-icon"  />
                                <div>
                                    <h4>FAO</h4>
                                    <Link to="#" className="category">crop production</Link>
                                    <p>10K followers</p>
                                </div>
                                <Link to="#" className="follow-btn">+ Follow</Link>
                            </div>
                            <div className="content">
                                <Avatar className="img" src={require("../../assets/images/shapes_and_assets_folder/austin.jpg")} alt="pages-icon"  />
                                <div>
                                    <h4>FAO</h4>
                                    <Link to="#" className="category">crop production</Link>
                                    <p>10K followers</p>
                                </div>
                                <Link to="#" className="follow-btn">+ Follow</Link>
                            </div>
                        </div>
                        <Link to="#" className="view-all">view all recommendations</Link>
                    </div>


                    <div className="recommended-pages">
                    <h3 className="title">Recommended Groups</h3>
                        <div>
                            <div className="content">
                                <Avatar className="img" src={require("../../assets/images/shapes_and_assets_folder/christopher-campbell.jpg")} alt="pages-icon"  />
                                <div>
                                    <h4>FAO</h4>
                                    <Link to="#" className="category">crop production</Link>
                                    <p>10K followers</p>
                                </div>
                                <Link to="#" className="follow-btn">join Group</Link>
                            </div>
                            <div className="content">
                                <Avatar className="img" src={require("../../assets/images/shapes_and_assets_folder/austin.jpg")} alt="pages-icon"  />
                                <div>
                                    <h4>FAO</h4>
                                    <Link to="#" className="category">crop production</Link>
                                    <p>10K followers</p>
                                </div>
                                <Link to="#" className="follow-btn">join Group</Link>
                            </div>
                            <div className="content">
                                <Avatar className="img" src={require("../../assets/images/shapes_and_assets_folder/team3.jpg")} alt="pages-icon"  />
                                <div>
                                    <h4>FAO</h4>
                                    <Link to="#" className="category">crop production</Link>
                                    <p>10K followers</p>
                                </div>
                                <Link to="#" className="follow-btn">join Group</Link>
                            </div>
                        </div>
                        <Link to="#" className="view-all">view all recommendations</Link>
                    </div>


                    <div className="recommended-pages">
                    <h3 className="title">Recommended Connections</h3>
                        <div>
                            <div className="content">
                                <Avatar className="img" src={require("../../assets/images/shapes_and_assets_folder/team2.jpg")} alt="pages-icon"  />
                                <div>
                                    <h4>FAO</h4>
                                    <Link to="#" className="category">crop production</Link>
                                    <p>10K followers</p>
                                </div>
                                <Link to="#" className="follow-btn">Connect</Link>
                            </div>
                            <div className="content">
                                <Avatar className="img" src={require("../../assets/images/shapes_and_assets_folder/background.png")} alt="pages-icon"  />
                                <div>
                                    <h4>FAO</h4>
                                    <Link to="#" className="category">crop production</Link>
                                    <p>10K followers</p>
                                </div>
                                <Link to="#" className="follow-btn">Connect</Link>
                            </div>
                            <div className="content">
                                <Avatar className="img" src={require("../../assets/images/shapes_and_assets_folder/christopher-campbell.jpg")} alt="pages-icon"  />
                                <div>
                                    <h4>FAO</h4>
                                    <Link to="#" className="category">crop production</Link>
                                    <p>10K followers</p>
                                </div>
                                <Link to="#" className="follow-btn">Connect</Link>
                            </div>
                            <div className="content">
                                <Avatar className="img" src={require("../../assets/images/shapes_and_assets_folder/team3.jpg")} alt="pages-icon"  />
                                <div>
                                    <h4>FAO</h4>
                                    <Link to="#" className="category">crop production</Link>
                                    <p>10K followers</p>
                                </div>
                                <Link to="#" className="follow-btn">Connect</Link>
                            </div>
                            <div className="content">
                                <Avatar className="img" src={require("../../assets/images/shapes_and_assets_folder/austin.jpg")} alt="pages-icon"  />
                                <div>
                                    <h4>FAO</h4>
                                    <Link to="#" className="category">crop production</Link>
                                    <p>10K followers</p>
                                </div>
                                <Link to="#" className="follow-btn">Connect</Link>
                            </div>
                        </div>
                        <Link to="#" className="view-all">view all recommendations</Link>
                    </div>
                    <div className="see-jobs-adds">
                        <div>
                            <h2>Your dream job is closer than you think</h2>
                            <Link to="#" className="see-jobs">see jobs</Link>
                        </div>
                        <img src={require("../../assets/images/shapes_and_assets_folder/Training.png")} alt="see jobs" />
                    </div>
                </div>
                <div className="cards">
                    <div class="card-1">
                        <img src={require("../../assets/images/shapes_and_assets_folder/Predictive-Analytics-Platform-Predata-Launches-U.S.-Equities-Offering.png")} alt="adds" />
                        <div class="elements">
                            <h3>This service is dedicated to the development of skills in enterprises</h3>
                            <div class="hyphens">
                                <div class="hyphen"></div>
                                <div class="hyphen"></div>
                                <div class="hyphen"></div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, Stet clita kasd lorem 
                                ipsum dolor ist amet sed diam eirmod tempor dolore.
                            </p>
                            <a href="#">read this article</a>
                        </div>
                    </div>
                    <div class="card-1">
                        <img src={require("../../assets/images/shapes_and_assets_folder/Predictive-Analytics-Platform-Predata-Launches-U.S.-Equities-Offering.png")} alt="adds" />
                        <div class="elements">
                            <h3>This service is dedicated to the development of skills in enterprises</h3>
                            <div class="hyphens">
                                <div class="hyphen"></div>
                                <div class="hyphen"></div>
                                <div class="hyphen"></div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, Stet clita kasd lorem 
                                ipsum dolor ist amet sed diam eirmod tempor dolore.
                            </p>
                            <a href="#">read this article</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewprofileuiSidebar
