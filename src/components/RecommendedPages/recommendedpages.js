import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './recommendedpages.css';

class RecommendedPages extends Component {
    render() {
        return (
            <div className="recommended-pages">
                <h2>Pages recommended for you</h2>
                <div className="news">
                    {/* Card 1 */}
                    <div className="card">
                        <img src={require('../../assets/images/shapes_and_assets_folder/background.png')} alt=""/>
                        <img className="round-image" src={require('../../assets/images/shapes_and_assets_folder/background.png')} alt=""/>
                        <div className="card-body">
                            <h4>FAO</h4>
                            <p>Crop Production</p>
                            <Link to="#" className="location"><i className="fa fa-map-marker"></i>Yaounde, Cameroon</Link>
                            <h6>2500 followers</h6>
                        </div>
                        <div className="cardFooter">
                            <Link to="/" className="subscribe">Follow</Link>
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div className="card">
                        <img src={require('../../assets/images/shapes_and_assets_folder/background.png')} alt=""/>
                        <img className="round-image" src={require('../../assets/images/shapes_and_assets_folder/background.png')} alt=""/>
                        <div className="card-body">
                            <h4>FAO</h4>
                            <p>Crop Production</p>
                            <Link to="#" className="location"><i className="fa fa-map-marker"></i>Yaounde, Cameroon</Link>
                            <h6>2500 followers</h6>
                        </div>
                        <div className="cardFooter">
                            <Link to="/" className="subscribe">Follow</Link>
                        </div>
                    </div>
                    {/* Card 3 */}
                    <div className="card">
                        <img src={require('../../assets/images/shapes_and_assets_folder/background.png')} alt=""/>
                        <img className="round-image" src={require('../../assets/images/shapes_and_assets_folder/background.png')} alt=""/>
                        <div className="card-body">
                            <h4>FAO</h4>
                            <p>Crop Production</p>
                            <Link to="#" className="location"><i className="fa fa-map-marker"></i>Yaounde, Cameroon</Link>
                            <h6>2500 followers</h6>
                        </div>
                        <div className="cardFooter">
                            <Link to="/" className="subscribe">Follow</Link>
                        </div>
                    </div>
                    {/* Card 4 */}
                    <div className="card">
                        <img src={require('../../assets/images/shapes_and_assets_folder/background.png')} alt=""/>
                        <img className="round-image" src={require('../../assets/images/shapes_and_assets_folder/background.png')} alt=""/>
                        <div className="card-body">
                            <h4>FAO</h4>
                            <p>Crop Production</p>
                            <Link to="#" className="location"><i className="fa fa-map-marker"></i>Yaounde, Cameroon</Link>
                            <h6>2500 followers</h6>
                        </div>
                        <div className="cardFooter">
                            <Link to="/" className="subscribe">Follow</Link>
                        </div>
                    </div>
                    {/* Card 5 */}
                    <div className="card">
                        <img src={require('../../assets/images/shapes_and_assets_folder/background.png')} alt=""/>
                        <img className="round-image" src={require('../../assets/images/shapes_and_assets_folder/background.png')} alt=""/>
                        <div className="card-body">
                            <h4>FAO</h4>
                            <p>Crop Production</p>
                            <Link to="#" className="location"><i className="fa fa-map-marker"></i>Yaounde, Cameroon</Link>
                            <h6>2500 followers</h6>
                        </div>
                        <div className="cardFooter">
                            <Link to="/" className="subscribe">Follow</Link>
                        </div>
                    </div>
                    {/* Card 6 */}
                    <div className="card">
                        <img src={require('../../assets/images/shapes_and_assets_folder/background.png')} alt=""/>
                        <img className="round-image" src={require('../../assets/images/shapes_and_assets_folder/background.png')} alt=""/>
                        <div className="card-body">
                            <h4>FAO</h4>
                            <p>Crop Production</p>
                            <Link to="#" className="location"><i className="fa fa-map-marker"></i>Yaounde, Cameroon</Link>
                            <h6>2500 followers</h6>
                        </div>
                        <div className="cardFooter">
                            <Link to="/" className="subscribe">Follow</Link>
                        </div>
                    </div>
                </div>
                <Link to="#" className="see-more-link">See All</Link>

            </div>
        )
    }
}

export default RecommendedPages
