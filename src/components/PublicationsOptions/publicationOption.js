import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './publicationOption.css'



class PublicationOption extends Component {
    render(){
      return(
        <div className="publicationOption">
            <div className="title">
                <h6>Meta Title <i className="fa fa-question-circle" style={{color: "#006644"}}></i></h6>
                <textarea placeholder="Add an Option SEO-Friendly Meta Title Here if Desired"></textarea>
            </div>
            <div className="description">
                <h6>Meta Description <i className="fa fa-question-circle" style={{color: "#006644"}}></i></h6>
                <textarea placeholder="Add an Optional SEO-friendly Meta Description Here if Desired" rows="8"></textarea>
            </div>
            <div className="buttons">
              <Link to="#" className="cancel-btn">Cancel</Link>
              <Link to="#" className="save-btn">Save Draft</Link>
            </div>
        </div>
       )
    }

 }

export default PublicationOption