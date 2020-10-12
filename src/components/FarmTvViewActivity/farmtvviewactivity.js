import React, { Component } from 'react';
import './farmtvviewactivity.css';
import { Link } from 'react-router-dom';

class FarmTvViewActivity extends Component {
    render() {
        return (
            <div className="farmtv-view-activity">
                <div className="farmtv-view-activity">

                <div>
                    <h3 className="dates-category">september 2020</h3>
                    <div className="summary-info">
                        <h4>Farm Tv Videos</h4>
                        <Link to="#" className="link">Approved videos (7)</Link>
                    </div>
                    <div className="items">
                        <div className="row">
                            <h5>Sept, 16 2020</h5>
                            <div className="content">
                                <div className="column-1">
                                    <div className="video-section">
                                        <video controls poster={require("../../assets/images/shapes_and_assets_folder/christopher-campbell.jpg")}>
                                            <source className="source-vid" src={require("../../assets/video/Felix Navidad.mp4")} type="video/mp4" />
                                            <source src={require("../../assets/video/Felix Navidad.mp4")} type="video/ogg" />
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                                    <div>
                                        <h6>SUH Gerald</h6>
                                        <p>Sustainable agriculture is the future. According to Forbes the next aspects of modern day agriculture considered is sustainability.</p>
                                    </div>
                                </div>
                                <button>view activity</button>
                            </div>
                        </div>

                        <div className="row">
                            <h5>Sept, 16 2020</h5>
                            <div className="content">
                                <div className="column-1">
                                    <div className="video-section">
                                        <video controls poster={require("../../assets/images/shapes_and_assets_folder/christopher-campbell.jpg")}>
                                            <source className="source-vid" src={require("../../assets/video/Felix Navidad.mp4")} type="video/mp4" />
                                            <source src={require("../../assets/video/Felix Navidad.mp4")} type="video/ogg" />
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                                    <div>
                                        <h6>SUH Gerald</h6>
                                        <p>Sustainable agriculture is the future. According to Forbes the next aspects of modern day agriculture considered is sustainability.</p>
                                    </div>
                                </div>
                                <button>view activity</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="dates-category">august 2020</h3>
                    <div className="items">
                        <div className="row">
                            <h5>August 03, 2020</h5>
                            <div className="content">
                                <div className="column-1">
                                    <div className="video-section">
                                        <video controls poster={require("../../assets/images/shapes_and_assets_folder/christopher-campbell.jpg")}>
                                            <source className="source-vid" src={require("../../assets/video/Felix Navidad.mp4")} type="video/mp4" />
                                            <source src={require("../../assets/video/Felix Navidad.mp4")} type="video/ogg" />
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                                    <div>
                                        <h6>SUH Gerald</h6>
                                        <p>Sustainable agriculture is the future. According to Forbes the next aspects of modern day agriculture considered is sustainability.</p>
                                    </div>
                                </div>
                                <button>view activity</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="dates-category">july 2020</h3>
                    <div className="items">
                        <div className="row">
                            <h5>july 30, 2020</h5>
                            <div className="content">
                                <div className="column-1">
                                    <div className="video-section">
                                        <video controls poster={require("../../assets/images/shapes_and_assets_folder/christopher-campbell.jpg")}>
                                            <source className="source-vid" src={require("../../assets/video/Felix Navidad.mp4")} type="video/mp4" />
                                            <source src={require("../../assets/video/Felix Navidad.mp4")} type="video/ogg" />
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                                    <div>
                                        <h6>SUH Gerald</h6>
                                        <p>Sustainable agriculture is the future. According to Forbes the next aspects of modern day agriculture considered is sustainability.</p>
                                    </div>
                                </div>
                                <button>view activity</button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default FarmTvViewActivity
