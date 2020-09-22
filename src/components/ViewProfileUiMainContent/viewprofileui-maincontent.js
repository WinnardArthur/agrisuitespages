import React, { Component } from 'react';
import "./viewprofileui-maincontent.css";
import ViewprofileuiAbout from '../Viewprofileui-About/viewprofileui-about';
import ViewprofileuiSkillsAndInterests from '../Viewprofileui-Skills-Interests/viewprofileui-skills-interests';
import ViewprofileuiAfilliations from '../Viewprofileui-Affiliations/viewprofileui-afilliations';
import ViewprofileuiFarms from '../Viewprofileui-Farms/viewprofileui-farms';
import ViewprofileuiVideos from '../Viewprofileui-Videos/viewprofileui-videos';
import ViewprofileuiArticles from '../Viewprofileui-Articles/viewprofileui-articles';
import { HashLink as Link } from 'react-router-hash-link';


export class ViewprofileuiMaincontent extends Component {
    render() {
        return (
            <div className="viewprofileui-maincontent">
                <hr/>
                <div className="content-header">
                    <Link to="#viewprofileAbout" className="header-links">about</Link>
                    <Link to="#viewprofileSkills" className="header-links">skill/interest</Link>
                    <Link to="#viewprofileAfilliations" className="header-links">afilliations</Link>
                    <Link to="#viewprofileFarms" className="header-links">farms</Link>
                    <Link to="#viewprofileVideos" className="header-links">videos</Link>
                    <Link to="#viewprofileArticles" className="header-links">articles</Link>
                    <Link to="#" className="header-links">post</Link>
                    <Link to="#" className="header-links">certifications</Link>
                </div>
                <div id="viewprofileAbout">
                    <ViewprofileuiAbout/>
                </div>
                <div id="viewprofileSkills">
                    <ViewprofileuiSkillsAndInterests/>
                </div>
                <div id="viewprofileAfilliations">
                    <ViewprofileuiAfilliations/>
                </div>
                <div id="viewprofileFarms">
                    <ViewprofileuiFarms/>
                </div>
                <div id="viewprofileVideos">
                    <ViewprofileuiVideos/>
                </div>
                <div id="viewprofileArticles">
                    <ViewprofileuiArticles/>
                </div>
            </div>
        )
    }
}

export default ViewprofileuiMaincontent
