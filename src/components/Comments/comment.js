import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import './comment.css'


const CommentsSection = (props) => {
  return(
    <div className="CommentSection">
         <div className="comment-info">
           <div>65 likes</div>
           <div>2 Dislikes</div>
           <div>6 comments</div>
           <div>5 Shares</div>
        </div>

        <div class="icons" >
            <Link to="#" className="icon-1">
                <i class="fa fa-thumbs-up like"></i>
                <span>Like</span>
            </Link>
            <Link to="#" className="icon-1">
                <i class="fa fa-thumbs-down dislike"></i>
                <span>DisLike</span>
            </Link>
            <Link to="#link-to-comment" className="icon-1">
                <i class="fa fa-comment"></i>
                <span>Comment</span>
            </Link>
            <Link to="#" className="icon-1">
                <i className="fa fa-share-alt"></i>
                <span>Share</span>
            </Link>
        </div>

        <div class="like-section">
            {/* <div id="like-dislike-buttons">
                <Link to="#"><i class="fa fa-thumbs-up like-icon like"></i></Link><span class="Number"> 0</span>
            </div> */}
            <div class="comment-section">
                <div className="empty-div"></div>
                <form action="" method="" className="comment-form" >
                        <input name="comment[text]" placeholder="Write a Comment"  id="link-to-comment"/>
                     <br/><br/>
                    <button className="btn">Submit Comment</button>
                </form>
            </div>
        </div>
    </div>
   )

 }

export default CommentsSection