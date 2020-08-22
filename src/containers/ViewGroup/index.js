import React, { Component } from 'react';
import './style.css';
import PagesUserProfile from '../../components/PagesUserProfile/pagesuserprofile'
import Adds from '../../components/Adds/adds'
import ViewCard from '../../components/ViewCards/viewcards';

export class ViewGroup extends Component {
    render() {
        return (
            <div className="view-group">
                 <h1 style={{textAlign: "center", fontWeight: "500",marginBottom: "1rem"}}><span style={{color: "red"}}><u>line of ads</u></span> passes here:advertising a company</h1>
                <div className="contents">
                    <div className="column1">
                        <PagesUserProfile create="Create Group"/>
                    </div>
                    <div className="column2">
                        <div className="row-1">
                            <h5>40 groups</h5>
                            <div className="search-bar"><i className="fa fa-search"></i><input type="text" placeholder="search connectins" /></div>
                        </div>
                        <div className="row-2">
                            <div>
                                <ViewCard/>
                            </div>
                            <div>
                                <ViewCard/>
                            </div>
                            <div>
                                <ViewCard/>
                            </div>
                            <div>
                                <ViewCard/>
                            </div>
                            <div>
                                <ViewCard/>
                            </div>
                            <div>
                                <ViewCard/>
                            </div>
                            <div>
                                <ViewCard/>
                            </div>
                            <div>
                                <ViewCard/>
                            </div>
                            <div>
                                <ViewCard/>
                            </div>
                            <div>
                                <ViewCard/>
                            </div>
                            <div>
                                <ViewCard/>
                            </div>
                            <div>
                                <ViewCard/>
                            </div>
                            <div>
                                <ViewCard/>
                            </div>
                            <div>
                                <ViewCard/>
                            </div>
                            <div>
                                <ViewCard/>
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

export default ViewGroup
