import React from 'react'
import './post.scss'
const Post = () => {
  return (
    <div className='post'>
        <div className="top">
        <div className="topLeft">
            <img src="/assets/svg/profile.jpg" alt="" />
            <span className='username'>_nishaann_</span>
            <span className="time">1hr</span>

        </div>
        <div className="topRight">
       <img src="/assets/svg/svg_threeDot.png" alt="" />
        </div>
       
        </div>
        <div className="postImage">
            <img src="/assets/postImage.jpg" alt="" />
        </div>
        <div className="middle">
        <div className="middleLeft">

        <img src="/assets/svg/svg_notifications.png" alt="" />
        <img src="/assets/svg/svg_comment.png" alt="" />
        <img src="/assets/svg/svg_share.png" alt="" />
        </div>
        <div className="middleRight">
        <img src="/assets/svg/svg_save.png" alt="" />
        </div>
        </div>

          {/* Likes */}
        <div className="likes">
          <span>200 Likes</span>
          </div>

        {/* Description */}
        <div className="description">
        <span className='username'>_nishaann_ &nbsp;</span>
        <p>Mr Beast Helped 1000 people for their eye surgery</p>
        </div>
        
        {/* Comment */}
        <div className="comment">
        <span className='viewComment'> View all Comments</span>
          <input type="text" name="comment" id="comment" placeholder='Add a comment' />
        </div>

       
    </div>
  )
}

export default Post