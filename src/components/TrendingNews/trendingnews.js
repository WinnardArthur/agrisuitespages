import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './trendingnews.css';

class TrendingNews extends Component {
    render() {
        return (
            <div className="trending-news">
                <h2>Groups recommended for you</h2>
                <div className="news">
                    {/* Card 1 */}
                    <div className="card">
                        <img src={require('../../assets/images/shapes_and_assets_folder/background.png')} alt=""/>
                        <img className="round-image" src={require('../../assets/images/shapes_and_assets_folder/background.png')} alt=""/>
                        <div className="card-body">
                            <h4>Ndop Rice Farmers</h4>
                            <p>Crop Production</p>
                            <h6>2500 followers</h6>
                        </div>
                        <div className="cardFooter">
                            <Link to="/" className="subscribe">Join Group +</Link>
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div className="card">
                        <img src={require('../../assets/images/shapes_and_assets_folder/background.png')} alt=""/>
                        <img className="round-image" src={require('../../assets/images/shapes_and_assets_folder/background.png')} alt=""/>
                        <div className="card-body">
                            <h4>Grow it</h4>
                            <p>Crop Production</p>
                            <h6>2500 followers</h6>
                        </div>
                        <div className="cardFooter">
                            <Link to="/" className="subscribe">Join Group +</Link>
                        </div>
                    </div>
                    {/* Card 3 */}
                    <div className="card">
                        <img src={require('../../assets/images/shapes_and_assets_folder/background.png')} alt=""/>
                        <img className="round-image" src={require('../../assets/images/shapes_and_assets_folder/background.png')} alt=""/>
                        <div className="card-body">
                            <h4>Grow it</h4>
                            <p>Crop Production</p>
                            <h6>2500 followers</h6>
                        </div>
                        <div className="cardFooter">
                            <Link to="/" className="subscribe">Join Group +</Link>
                        </div>
                    </div>
                    {/* Card 4 */}
                    <div className="card">
                        <img src={require('../../assets/images/shapes_and_assets_folder/background.png')} alt=""/>
                        <img className="round-image" src={require('../../assets/images/shapes_and_assets_folder/background.png')} alt=""/>
                        <div className="card-body">
                            <h4>Grow it</h4>
                            <p>Crop Production</p>
                            <h6>2500 followers</h6>
                        </div>
                        <div className="cardFooter">
                            <Link to="/" className="subscribe">Join Group +</Link>
                        </div>
                    </div>
                    {/* Card 5 */}
                    <div className="card">
                        <img src={require('../../assets/images/shapes_and_assets_folder/background.png')} alt=""/>
                        <img className="round-image" src={require('../../assets/images/shapes_and_assets_folder/background.png')} alt=""/>
                        <div className="card-body">
                            <h4>Grow it</h4>
                            <p>Crop Production</p>
                            <h6>2500 followers</h6>
                        </div>
                        <div className="cardFooter">
                            <Link to="/" className="subscribe">Join Group +</Link>
                        </div>
                    </div>
                    {/* Card 6 */}
                    <div className="card">
                        <img src={require('../../assets/images/shapes_and_assets_folder/background.png')} alt=""/>
                        <img className="round-image" src={require('../../assets/images/shapes_and_assets_folder/background.png')} alt=""/>
                        <div className="card-body">
                            <h4>Grow it</h4>
                            <p>Crop Production</p>
                            <h6>2500 followers</h6>
                        </div>
                        <div className="cardFooter">
                            <Link to="/" className="subscribe">Join Group +</Link>
                        </div>
                    </div>
                </div>
                <Link to="#" className="see-more-link">See All</Link>

            </div>
        )
    }
}

export default TrendingNews
