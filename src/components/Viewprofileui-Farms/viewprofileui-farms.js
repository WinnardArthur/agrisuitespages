import React, { Component } from 'react';
import "./viewprofileui-farms.css";
import { Link } from "react-router-dom";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';


class ViewprofileuiFarms extends Component {
    render() {
        return (
            <div className="viewprofileui-farms">
                <div className="row-1">
                    farms
                </div>
                <div className="row-2">
                   <OwlCarousel className="owl-theme cards"
                    items="3"
                    autoplay
                    loop 
                    nav
                    margin={15}
                    >
                        <div className="card">
                            <img src={require("../../assets/images/shapes_and_assets_folder/seediling.jpg")} alt="carrot farming"/>
                            <div className="card-name">carrot farming</div>
                            <p>Carrot cultivation is usually considered cumbersome by many</p>
                            <div className="card-footer">
                                <i className="fa fa-caret-right"></i>
                                <Link to="#" className="view-more-btn">view farm details</Link>
                            </div>
                            <div className="green-overlay"></div>
                        </div>
                        <div className="card">
                            <img src={require("../../assets/images/shapes_and_assets_folder/seediling.jpg")} alt="carrot farming"/>
                            <div className="card-name">carrot farming</div>
                            <p>Carrot cultivation is usually considered cumbersome by many</p>
                            <div className="card-footer">
                                <i className="fa fa-caret-right"></i>
                                <Link to="#" className="view-more-btn">view farm details</Link>
                            </div>
                            <div className="green-overlay"></div>
                        </div>
                        <div className="card">
                            <img src={require("../../assets/images/shapes_and_assets_folder/seediling.jpg")} alt="carrot farming"/>
                            <div className="card-name">carrot farming</div>
                            <p>Carrot cultivation is usually considered cumbersome by many</p>
                            <div className="card-footer">
                                <i className="fa fa-caret-right"></i>
                                <Link to="#" className="view-more-btn">view farm details</Link>
                            </div>
                            <div className="green-overlay"></div>
                        </div>
                        <div className="card">
                            <img src={require("../../assets/images/shapes_and_assets_folder/seediling.jpg")} alt="carrot farming"/>
                            <div className="card-name">carrot farming</div>
                            <p>Carrot cultivation is usually considered cumbersome by many</p>
                            <div className="card-footer">
                                <i className="fa fa-caret-right"></i>
                                <Link to="#" className="view-more-btn">view farm details</Link>
                            </div>
                            <div className="green-overlay"></div>
                        </div>
                        <div className="card">
                            <img src={require("../../assets/images/shapes_and_assets_folder/seediling.jpg")} alt="carrot farming"/>
                            <div className="card-name">carrot farming</div>
                            <p>Carrot cultivation is usually considered cumbersome by many</p>
                            <div className="card-footer">
                                <i className="fa fa-caret-right"></i>
                                <Link to="#" className="view-more-btn">view farm details</Link>
                            </div>
                            <div className="green-overlay"></div>
                        </div>
                        <div className="card">
                            <img src={require("../../assets/images/shapes_and_assets_folder/seediling.jpg")} alt="carrot farming"/>
                            <div className="card-name">carrot farming</div>
                            <p>Carrot cultivation is usually considered cumbersome by many</p>
                            <div className="card-footer">
                                <i className="fa fa-caret-right"></i>
                                <Link to="#" className="view-more-btn">view farm details</Link>
                            </div>
                            <div className="green-overlay"></div>
                        </div>
                        <div className="card">
                            <img src={require("../../assets/images/shapes_and_assets_folder/seediling.jpg")} alt="carrot farming"/>
                            <div className="card-name">carrot farming</div>
                            <p>Carrot cultivation is usually considered cumbersome by many</p>
                            <div className="card-footer">
                                <i className="fa fa-caret-right"></i>
                                <Link to="#" className="view-more-btn">view farm details</Link>
                            </div>
                            <div className="green-overlay"></div>
                        </div>

                    </OwlCarousel>
                </div>
            </div>
        )
    }
}

export default ViewprofileuiFarms
