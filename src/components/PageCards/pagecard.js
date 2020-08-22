import React, { Component } from 'react'
import './pagecard.css';
import { Link } from 'react-router-dom'

class PageCard extends Component {
    render() {
        return (
            <div className="page-cards">
                <div className="news">
                    {/* Card  */}
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
                            <Link to="/" className="follow">Following</Link>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default PageCard
