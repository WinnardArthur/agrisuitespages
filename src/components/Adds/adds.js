import React, { Component } from 'react';
import './adds.css'
import Box from '@material-ui/core/Box'

class Adds extends Component {
    render() {
        return (
            <div className="adds">
                <Box className="add">
                    <img src={require('../../assets/images/shapes_and_assets_folder/tech-sample2.jpg')} alt="adds"/>
                    <h2>Adds</h2>
                </Box>
                <Box className="add">
                    <img src={require('../../assets/images/shapes_and_assets_folder/tech-sample2.jpg')} alt="adds"/>
                    <h2>Adds</h2>
                </Box>
                <Box className="add">
                    <img src={require('../../assets/images/shapes_and_assets_folder/tech-sample2.jpg')} alt="adds"/>
                    <h2>Adds</h2>
                </Box>
            </div>
        )
    }
}

export default Adds
