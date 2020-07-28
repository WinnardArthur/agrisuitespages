import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './publicationsetting.css'


class PublicationSettings extends Component {
    render(){
        return(
            <div className="settingsCard">
                <h4 className="title"><u>Publishing Settings</u></h4>
                <hr/>
                <p className="category">article categories: <i className="fa fa-question-circle"></i></p>
                <select className="categories">
                    <option>Select a Category</option>
                </select>
                <p className="subcategory">article sub-categories: <i className="fa fa-question-circle"></i></p>
                <select className="subCategories">
                    <option>Select a Sub-Category</option>
                </select>
                <h6 className="share">Share URL <i className="fa fa-question-circle" style={{color: "#006644"}}></i></h6>
                <input type="text" className="shareInput"/>
                <input type="text" placeholder="Add Article Headline Photo" className="photoInput" />
                <div className="schedules">
                    <input type="radio" name="schedule"/>
                    <p>Not scheduled</p>
                </div>
                <div className="schedules">
                    <input type="radio" name="schedule"/>
                    <p>Schedule to be published on</p>
                </div>
                <input type="text" placeholder="Date of Publishing" className="publishingDate"/>
                <div className="times">
                    <p>At:</p>
                    <input type="number"/>
                    <input type="number"/>
                    <select className="time">
                        <option>AM</option>
                        <option>PM</option>
                    </select>
                </div>
                <hr/>
                <div className="buttons">
                  <Link to="#" className="preview-btn">Preview</Link>
                  <Link to="#" className="publish-btn">Publish</Link>
                </div>
            </div>
        )
    }
}


export default PublicationSettings