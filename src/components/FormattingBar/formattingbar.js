import React, { Component } from 'react'
import './formattingbar.css'


class FormattingBar extends Component {
  render(){
    return(
      <div className="main">
        <div className="formatting-container">
            <div><i className="fa fa-bold"></i></div>
            <div><i className="fa fa-italic"></i></div>
            <div><i className="fa fa-underline"></i></div>
            <div>Normal</div>
            <div>H2</div>
            <div>H3</div>
            <div>H4</div>
            <div><i className="fa fa-list-ol"></i></div>
            <div><i className="fa fa-list-ul"></i></div>
            <div><i className="fa fa-quote-left"></i></div>
            <div><i className="fa fa-link"></i></div>
        </div>
      </div>
    )
  }
}


export default FormattingBar