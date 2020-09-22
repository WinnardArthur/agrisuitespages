import React, { Component } from 'react';
import "./viewprofileui-articles.css";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css"

export class ViewprofileuiArticles extends Component {
    render() {
        return (
            <div className="viewprofileui-articles">
                <div className="row-1">
                    articles
                </div>
                <div className="row-2">
                   <OwlCarousel className="owl-theme items"
                    items="1"
                    autoplay
                    loop 
                    nav
                    margin={5}
                    >
                        <div className="item">
                            {/* first card */}
                            <div className="sub-item">
                                <img src={require("../../assets/images/shapes_and_assets_folder/seediling.jpg")} alt="carrot farming"/>
                                <div className="card">
                                    <h3>ai in agriculture</h3>
                                    <p>Raising say express had chiefly detract demands she. Quiet led own cause three him. Front no party</p>
                                    <div className="card-footer">
                                        <Link to="#" className="view-more-btn">view more</Link>
                                    </div>
                                </div>
                            </div>
                            {/* 2nd card */}
                            <div className="sub-item">
                                <img src={require("../../assets/images/shapes_and_assets_folder/seediling.jpg")} alt="carrot farming"/>
                                <div className="card">
                                    <h3>ai in agriculture</h3>
                                    <p>Raising say express had chiefly detract demands she. Quiet led own cause three him. Front no party</p>
                                    <div className="card-footer">
                                        <Link to="#" className="view-more-btn">view more</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="sub-item">
                                <img src={require("../../assets/images/shapes_and_assets_folder/seediling.jpg")} alt="carrot farming"/>
                                <div className="card">
                                    <h3>ai in agriculture</h3>
                                    <p>Raising say express had chiefly detract demands she. Quiet led own cause three him. Front no party</p>
                                    <div className="card-footer">
                                        <Link to="#" className="view-more-btn">view more</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="sub-item">
                                <img src={require("../../assets/images/shapes_and_assets_folder/seediling.jpg")} alt="carrot farming"/>
                                <div className="card">
                                    <h3>ai in agriculture</h3>
                                    <p>Raising say express had chiefly detract demands she. Quiet led own cause three him. Front no party</p>
                                    <div className="card-footer">
                                        <Link to="#" className="view-more-btn">view more</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            {/* first card */}
                            <div className="sub-item">
                                <img src={require("../../assets/images/shapes_and_assets_folder/seediling.jpg")} alt="carrot farming"/>
                                <div className="card">
                                    <h3>ai in agriculture</h3>
                                    <p>Raising say express had chiefly detract demands she. Quiet led own cause three him. Front no party</p>
                                    <div className="card-footer">
                                        <Link to="#" className="view-more-btn">view more</Link>
                                    </div>
                                </div>
                            </div>
                            {/* 2nd card */}
                            <div className="sub-item">
                                <img src={require("../../assets/images/shapes_and_assets_folder/seediling.jpg")} alt="carrot farming"/>
                                <div className="card">
                                    <h3>ai in agriculture</h3>
                                    <p>Raising say express had chiefly detract demands she. Quiet led own cause three him. Front no party</p>
                                    <div className="card-footer">
                                        <Link to="#" className="view-more-btn">view more</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="sub-item">
                                <img src={require("../../assets/images/shapes_and_assets_folder/seediling.jpg")} alt="carrot farming"/>
                                <div className="card">
                                    <h3>ai in agriculture</h3>
                                    <p>Raising say express had chiefly detract demands she. Quiet led own cause three him. Front no party</p>
                                    <div className="card-footer">
                                        <Link to="#" className="view-more-btn">view more</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="sub-item">
                                <img src={require("../../assets/images/shapes_and_assets_folder/seediling.jpg")} alt="carrot farming"/>
                                <div className="card">
                                    <h3>ai in agriculture</h3>
                                    <p>Raising say express had chiefly detract demands she. Quiet led own cause three him. Front no party</p>
                                    <div className="card-footer">
                                        <Link to="#" className="view-more-btn">view more</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            {/* first card */}
                            <div className="sub-item">
                                <img src={require("../../assets/images/shapes_and_assets_folder/seediling.jpg")} alt="carrot farming"/>
                                <div className="card">
                                    <h3>ai in agriculture</h3>
                                    <p>Raising say express had chiefly detract demands she. Quiet led own cause three him. Front no party</p>
                                    <div className="card-footer">
                                        <Link to="#" className="view-more-btn">view more</Link>
                                    </div>
                                </div>
                            </div>
                            {/* 2nd card */}
                            <div className="sub-item">
                                <img src={require("../../assets/images/shapes_and_assets_folder/seediling.jpg")} alt="carrot farming"/>
                                <div className="card">
                                    <h3>ai in agriculture</h3>
                                    <p>Raising say express had chiefly detract demands she. Quiet led own cause three him. Front no party</p>
                                    <div className="card-footer">
                                        <Link to="#" className="view-more-btn">view more</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="sub-item">
                                <img src={require("../../assets/images/shapes_and_assets_folder/seediling.jpg")} alt="carrot farming"/>
                                <div className="card">
                                    <h3>ai in agriculture</h3>
                                    <p>Raising say express had chiefly detract demands she. Quiet led own cause three him. Front no party</p>
                                    <div className="card-footer">
                                        <Link to="#" className="view-more-btn">view more</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="sub-item">
                                <img src={require("../../assets/images/shapes_and_assets_folder/seediling.jpg")} alt="carrot farming"/>
                                <div className="card">
                                    <h3>ai in agriculture</h3>
                                    <p>Raising say express had chiefly detract demands she. Quiet led own cause three him. Front no party</p>
                                    <div className="card-footer">
                                        <Link to="#" className="view-more-btn">view more</Link>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </OwlCarousel>
                </div>
            </div>
        )
    }
}

export default ViewprofileuiArticles
