import React, { Component } from 'react'
import './style.css'
import Post from '../../components/Post/Post'
import GreenBar from '../../components/Green-bar/green-bar'
import BottomPagination from '../../components/BottomPagination/bottompagination'
import Polygons from '../../components/Polygons/polygon'


class Posts extends Component{
  render(){
    return(
      <div className="Posts">
        <h2 className="info-header">Crop Production</h2>
        <GreenBar/>
        <Post/>
        <BottomPagination/>
        <GreenBar style={{marginBottom: "-3em"}}/>
        <Polygons/>
      </div>
     ) 
  }
}


export default Posts