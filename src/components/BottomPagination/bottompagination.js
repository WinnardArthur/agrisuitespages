import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './bottompagination.css'

class BottomPagination extends Component {
    render() {
        return (
            <div className="bottomPagination">
                <div className="column-1">
                    <h3>Crop Production</h3>   
                    <Link to="#" className="paginationLinks">1</Link>
                    <Link to="#" className="paginationLinks">2</Link>
                    <Link to="#" className="paginationLinks">3</Link>
                    <Link to="#" className="paginationLinks">4</Link>
                    <Link to="#" className="paginationLinks">5</Link>
                    <Link to="#" className="paginationLinks">6</Link> 
                </div>         
                <div className="column-2">
                    <Link to="#" className="paginationLinks"><i className="fa fa-caret-right"></i></Link>    
                    <Link to="#" className="paginationLinks">Next</Link>
                </div>     
            </div>
        )
    }
}

export default BottomPagination
