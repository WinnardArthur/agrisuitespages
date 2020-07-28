import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './sidebar.css'


class Sidebar extends Component {
    render(){
        return(
            <div className="sidebar">
                <div className="card-container">
                    <div className="imgContainer">
                        <img src={require("../../assets/images/shapes_and_assets_folder/coding-bg.jpg")} alt="blog-image"/>
                    </div>
                    <div class="elements">
                        <h3>e-Agriculture</h3>
                        <div class="hyphens">
                            <div class="hyphen"></div>
                            <div class="hyphen"></div>
                            <div class="hyphen"></div>
                        </div>
                        <p>Lorem ipsum dolor sit amet, Stet clita kasd lorem ipsum dolor ist amet sed diam eirmod tempor dolore.</p>
                        <Link to="#">read this article</Link>
                    </div>  
                </div>
                <div className="card-container">
                    <div className="imgContainer">
                        <img src={require("../../assets/images/shapes_and_assets_folder/coding-bg.jpg")} alt="blog-image"/>
                    </div>
                    <div class="elements">
                        <h3>e-Agriculture</h3>
                        <div class="hyphens">
                            <div class="hyphen"></div>
                            <div class="hyphen"></div>
                            <div class="hyphen"></div>
                        </div>
                        <p>Lorem ipsum dolor sit amet, Stet clita kasd lorem ipsum dolor ist amet sed diam eirmod tempor dolore.</p>
                        <Link to="#">read this article</Link>
                    </div>  
                </div>
            </div>
        )
    }
}

export default Sidebar