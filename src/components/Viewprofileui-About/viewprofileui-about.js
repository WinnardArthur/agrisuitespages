import React, { Component } from 'react';
import "./viewprofileui-about.css";
import { Link } from "react-router-dom";

class ViewprofileuiAbout extends Component {

    constructor(props){
        super(props);
            this.state = {
                currentTab: 0,
                data: [
                    {
                        id: "1",
                        name: "professional summary",
                        description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer"
                    },
                    {
                        id: "2",
                        name: "work experience",
                        description: <div className="about-work-experience">
                                        <div className="row">
                                            <i className="fa fa-facebook"></i>
                                            <div className="details">
                                                <h4>projects extension director</h4>
                                                <Link to="#" className="group-name">The COCOgroup</Link>
                                                <p>Jan 2017-Present (3 yrs, 4 mon)</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <i className="fa fa-facebook"></i>
                                            <div className="details">
                                                <h4>projects extension director</h4>
                                                <Link to="#" className="group-name">The COCOgroup</Link>
                                                <p>Jan 2017-Present (3 yrs, 4 mon)</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <i className="fa fa-facebook"></i>
                                            <div className="details">
                                                <h4>projects extension director</h4>
                                                <Link to="#" className="group-name">The COCOgroup</Link>
                                                <p>Jan 2017-Present (3 yrs, 4 mon)</p>
                                            </div>
                                        </div>

                                    </div>
                    },
                    {
                        id: "3",
                        name: "education",
                        description: <div className="about-work-experience">
                                        <div className="row">
                                            <i className="fa fa-facebook"></i>
                                            <div className="details">
                                                <h4>monash university malaysia</h4>
                                                <Link to="#" className="group-name">Msc. Chemical Engineering</Link>
                                                <p>Jan 2017- 2020</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <i className="fa fa-facebook"></i>
                                            <div className="details">
                                                <h4>University of Ngaoundere(ENSAI)</h4>
                                                <Link to="#" className="group-name">Msc. Process Engineering</Link>
                                                <p>Jan 2014-2017</p>
                                                
                                            </div>
                                        </div>
                                        <div className="row">
                                            <i className="fa fa-facebook"></i>
                                            <div className="details">
                                                <h4>projects extension director</h4>
                                                <Link to="#" className="group-name">The COCOgroup</Link>
                                                <p>Jan 2017-Present (3 yrs, 4 mon)</p>
                                            </div>
                                        </div>

                                    </div>
                    },
                    {
                        id: "4",
                        name: "basic information",
                        description: <div className="about-work-experience">
                                        <div className="row">
                                            <i className="fa fa-facebook"></i>
                                            <div className="details">
                                                <h4>bio data</h4>
                                                <Link to="#" className="group-name">Name: Jean Pascal</Link>
                                                <p>Date of Birth: </p>
                                                <p>Sex: </p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <i className="fa fa-facebook"></i>
                                            <div className="details">
                                                <h4>contact info:</h4>
                                                <Link to="#" className="group-name">Email: jeanpascal@gmail.com</Link>
                                                <p>Tel: +237 667335789</p>
                                                <p>Location: Douala, Cameroon </p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <i className="fa fa-facebook"></i>
                                            <div className="details">
                                                <h4>social media handles</h4>
                                                <Link to="#" className="group-name">Facebook: </Link>
                                                <Link to="#" className="group-name">Instagram: </Link>
                                                <Link to="#" className="group-name">LinkedIn: </Link>

                                            </div>
                                        </div>
                                    </div>
                    }
                ]
            }
    }

    handleClick(currentTab){
        this.setState({currentTab})
    }


    render() {
        return (

            <div className="viewprofileui-about">
                <div className="row-1">
                    about 
                </div>
                <div className="row-2">
                    <div className="column-1">
                        {this.state.data.map((button, k) => (
                            <button key={button.name}  onClick={()=> {this.handleClick(k)}}>{button.name}</button>
                        ))}
                    </div>
                    <div className="column-2">
                        {this.state.currentTab !== -1 && 
                         <div>
                             {this.state.data[this.state.currentTab].description}
                         </div>
                        }

                    </div>
                </div>
            </div>

        )
    }
}

export default ViewprofileuiAbout
