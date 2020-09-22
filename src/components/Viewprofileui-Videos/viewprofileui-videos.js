import React, { Component } from 'react';
import "./viewprofileui-videos.css";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";

class ViewprofileuiVideos extends Component {
    render() {
        return (
            <div className="viewprofileui-videos">
                <div className="row-1">
                    videos
                </div>
                <div className="row-2">
                   <OwlCarousel className="owl-theme cards"
                    items="3"
                    autoplay
                    loop 
                    nav
                    margin={8}
                    >
                        <div className="card">
                            <img src={require("../../assets/images/shapes_and_assets_folder/seediling.jpg")} alt="carrot farming"/>
                            <div className="card-name">crop production</div>
                            <h5>referring how we learn from edu novelty without stress.</h5>
                            <p>This is the Best Platform For Researchers who seek Writeup Excellence in Their Publications</p>
                            <div className="card-footer">
                                <Link to="#" className="view-more-btn">view more</Link>
                            </div>
                        </div>

                        <div className="card">
                            <img src={require("../../assets/images/shapes_and_assets_folder/seediling.jpg")} alt="carrot farming"/>
                            <div className="card-name">crop production</div>
                            <h5>referring how we learn from edu novelty without stress.</h5>
                            <p>This is the Best Platform For Researchers who seek Writeup Excellence in Their Publications</p>
                            <div className="card-footer">
                                <Link to="#" className="view-more-btn">view more</Link>
                            </div>
                        </div>

                        <div className="card">
                            <img src={require("../../assets/images/shapes_and_assets_folder/seediling.jpg")} alt="carrot farming"/>
                            <div className="card-name">crop production</div>
                            <h5>referring how we learn from edu novelty without stress.</h5>
                            <p>This is the Best Platform For Researchers who seek Writeup Excellence in Their Publications</p>
                            <div className="card-footer">
                                <Link to="#" className="view-more-btn">view more</Link>
                            </div>
                        </div>

                        <div className="card">
                            <img src={require("../../assets/images/shapes_and_assets_folder/seediling.jpg")} alt="carrot farming"/>
                            <div className="card-name">crop production</div>
                            <h5>referring how we learn from edu novelty without stress.</h5>
                            <p>This is the Best Platform For Researchers who seek Writeup Excellence in Their Publications</p>
                            <div className="card-footer">
                                <Link to="#" className="view-more-btn">view more</Link>
                            </div>
                        </div>

                        <div className="card">
                            <img src={require("../../assets/images/shapes_and_assets_folder/seediling.jpg")} alt="carrot farming"/>
                            <div className="card-name">crop production</div>
                            <h5>referring how we learn from edu novelty without stress.</h5>
                            <p>This is the Best Platform For Researchers who seek Writeup Excellence in Their Publications</p>
                            <div className="card-footer">
                                <Link to="#" className="view-more-btn">view more</Link>
                            </div>
                        </div>

                        <div className="card">
                            <img src={require("../../assets/images/shapes_and_assets_folder/seediling.jpg")} alt="carrot farming"/>
                            <div className="card-name">crop production</div>
                            <h5>referring how we learn from edu novelty without stress.</h5>
                            <p>This is the Best Platform For Researchers who seek Writeup Excellence in Their Publications</p>
                            <div className="card-footer">
                                <Link to="#" className="view-more-btn">view more</Link>
                            </div>
                        </div>

                        <div className="card">
                            <img src={require("../../assets/images/shapes_and_assets_folder/seediling.jpg")} alt="carrot farming"/>
                            <div className="card-name">crop production</div>
                            <h5>referring how we learn from edu novelty without stress.</h5>
                            <p>This is the Best Platform For Researchers who seek Writeup Excellence in Their Publications</p>
                            <div className="card-footer">
                                <Link to="#" className="view-more-btn">view more</Link>
                            </div>
                        </div>

                    </OwlCarousel>
                </div>
            </div>
        )
    }
}

export default ViewprofileuiVideos
