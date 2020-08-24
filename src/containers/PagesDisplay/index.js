import React, { Component } from 'react';
import './style.css';
import PagesUserProfile from '../../components/PagesUserProfile/pagesuserprofile'
import Adds from '../../components/Adds/adds'
import PageCard from '../../components/PageCards/pagecard';

export class PagesDisplay extends Component {
    render() {
        return (
            <div className="pages-display">
                 <h1 style={{textAlign: "center", fontWeight: "500",marginBottom: "1rem"}}><span style={{color: "red"}}><u>line of ads</u></span> passes here:advertising a company</h1>
                <div className="contents">
                    <div className="column1">
                        <PagesUserProfile create="Create Page"/>
                    </div>
                    <div className="column2">
                        <div className="row-1">
                            <h5>40 groups</h5>
                            <div className="search-bar"><i className="fa fa-search"></i><input type="text" placeholder="search connectins" /></div>
                        </div>
                        <div className="row-2">  
                            <div>
                                <PageCard/>
                            </div>   
                            <div>
                                <PageCard/>
                            </div>   
                            <div>
                                <PageCard/>
                            </div>   
                            <div>
                                <PageCard/>
                            </div>   
                            <div>
                                <PageCard/>
                            </div>                          
                            <div>
                                <PageCard/>
                            </div>   
                            <div>
                                <PageCard/>
                            </div>   
                            <div>
                                <PageCard/>
                            </div>   
                            <div>
                                <PageCard/>
                            </div>   
                            <div>
                                <PageCard/>
                            </div>   
                            <div>
                                <PageCard/>
                            </div>   
                            <div>
                                <PageCard/>
                            </div>   
                            
                        </div>
                    </div>
                    <div className="column3">
                        <Adds/>
                    </div>
                </div>
            </div>
        )
    }
}

export default PagesDisplay
