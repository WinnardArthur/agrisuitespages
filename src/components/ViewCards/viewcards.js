import React, { Component } from 'react';
import './viewcards.css';
import { Link } from 'react-router-dom';

export class ViewCard extends Component {
    render() {
        return (
            <div className="view-card">
                <div className="info">
                    {/* Card 1 */}
                    <div className="card">
                        <img src={require('../../assets/images/shapes_and_assets_folder/background.png')} alt=""/>
                        <img className="round-image" src={require('../../assets/images/shapes_and_assets_folder/background.png')} alt=""/>
                        <div className="card-body">
                            <h4>ndop rice farmers</h4>
                            <p>Crop Production</p>
                            <h6>2500 followers</h6>
                        </div>
                        <div className="cardFooter">
                            <Link to="/" className="see-group">see group</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewCard
