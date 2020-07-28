import React from 'react'
import './publicationBody.css'

/**
* @author
* @function PublicationBody
**/

const PublicationBody = (props) => {
  return(
    <div className="publicationBody">
        <textarea placeholder="Add a Heading Here" rows="2">

        </textarea>
        <textarea placeholder="Begin writing your article here..." rows="10"></textarea>
        <p>Your article needs at least 400 more characters</p>
    </div>
   )

 }

export default PublicationBody