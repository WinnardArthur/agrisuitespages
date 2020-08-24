import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './peoplesuggestions.css';


class PeopleSuggestions extends Component {
    render() {
        return (
            <div className="suggestions">
                <h2>People you may know</h2>
                <div className="cards">
                    {/* Card 1 */}
                    <div className="card">
                        <div className="greenbar"></div>
                        <img src={require("../../assets/images/images/team3.jpg")}  alt="user"/>
                        <h4>Nkeng arrey ebot</h4>
                        <p className="position">student</p>
                        <Link to="#" className="location"><i className="fa fa-map-marker"></i>Douala, Cameroon</Link>
                        <hr/>
                        <div className="stats">
                            <div className="stat">
                                <p>Agriscore</p>
                                <p>50</p>
                            </div>
                            <div className="stat">
                                <p>connections</p>
                                <p>50</p>
                            </div>
                        </div>
                        <Link to="#" className="connect">Connect</Link>
                    </div>
                    {/* Card 2 */}
                    <div className="card">
                        <div className="greenbar"></div>
                        <img src={require("../../assets/images/images/images (4).jpg")}  alt="user"/>
                        <h4>Nkeng arrey ebot</h4>
                        <p className="position">student</p>
                        <Link to="#" className="location"><i className="fa fa-map-marker"></i>Douala, Cameroon</Link>
                        <hr/>
                        <div className="stats">
                            <div className="stat">
                                <p>Agriscore</p>
                                <p>50</p>
                            </div>
                            <div className="stat">
                                <p>connections</p>
                                <p>50</p>
                            </div>
                        </div>
                        <Link to="#" className="connect">Connect</Link>
                    </div>
                    {/* Card 3 */}
                    <div className="card">
                        <div className="greenbar"></div>
                        <img src={require("../../assets/images/images/christopher-campbell.jpg")}  alt="user"/>
                        <h4>Nkeng arrey ebot</h4>
                        <p className="position">student</p>
                        <Link to="#" className="location"><i className="fa fa-map-marker"></i>Douala, Cameroon</Link>
                        <hr/>
                        <div className="stats">
                            <div className="stat">
                                <p>Agriscore</p>
                                <p>50</p>
                            </div>
                            <div className="stat">
                                <p>connections</p>
                                <p>50</p>
                            </div>
                        </div>
                        <Link to="#" className="connect">Connect</Link>
                    </div>
                    {/* Card 4 */}
                    <div className="card">
                        <div className="greenbar"></div>
                        <img src={require("../../assets/images/images/pexels-photo-1043474.jpeg")}  alt="user"/>
                        <h4>Nkeng arrey ebot</h4>
                        <p className="position">student</p>
                        <Link to="#" className="location"><i className="fa fa-map-marker"></i>Douala, Cameroon</Link>
                        <hr/>
                        <div className="stats">
                            <div className="stat">
                                <p>Agriscore</p>
                                <p>50</p>
                            </div>
                            <div className="stat">
                                <p>connections</p>
                                <p>50</p>
                            </div>
                        </div>
                        <Link to="#" className="connect">Connect</Link>
                    </div>
                    {/* Card 5 */}
                    <div className="card">
                        <div className="greenbar"></div>
                        <img src={require("../../assets/images/images/team2.jpg")}  alt="user"/>
                        <h4>Nkeng arrey ebot</h4>
                        <p className="position">student</p>
                        <Link to="#" className="location"><i className="fa fa-map-marker"></i>Douala, Cameroon</Link>
                        <hr/>
                        <div className="stats">
                            <div className="stat">
                                <p>Agriscore</p>
                                <p>50</p>
                            </div>
                            <div className="stat">
                                <p>connections</p>
                                <p>50</p>
                            </div>
                        </div>
                        <Link to="#" className="connect">Connect</Link>
                    </div>
                    {/* Card 6 */}
                    <div className="card">
                        <div className="greenbar"></div>
                        <img src={require("../../assets/images/images/team-member1.jpeg")}  alt="user"/>
                        <h4>Nkeng arrey ebot</h4>
                        <p className="position">student</p>
                        <Link to="#" className="location"><i className="fa fa-map-marker"></i>Douala, Cameroon</Link>
                        <hr/>
                        <div className="stats">
                            <div className="stat">
                                <p>Agriscore</p>
                                <p>50</p>
                            </div>
                            <div className="stat">
                                <p>connections</p>
                                <p>50</p>
                            </div>
                        </div>
                        <Link to="#" className="connect">Connect</Link>
                    </div>
                </div>
                <Link to="#" className="see-more-link">See All</Link>
            </div>
        )
    }
}

export default PeopleSuggestions
