import React from 'react'
import './profile.scss'

const Profile = () => {
    return (
        <div className='ProfilePage'>
            <div className="profileTop">
                <div className="profilePic">
                    <img src="/assets/svg/profile.jpg" alt="" />
                </div>
                <div className="details">

                    <div className="detailTop">
                        <span>__nishaann__</span>
                        <a >Edit Profile</a>
                        <img src="/assets/svg/svg_setting.png" alt="" />
                    </div>

                    <div className="detailMiddle">
                        <div className="postno">
                            <span>1</span> Post
                        </div>
                        <div className="followers">
                            <span>50</span> Followers
                        </div>

                        <div className="following">
                            <span>50</span> Following
                        </div>

                    </div>

                    <div className="detailBottom">
                        <span className="fullName">
                            Nishan Ghimire
                        </span>
                        <span className="desc">
                            Just the bio
                        </span>

                    </div>
                </div>

            </div>
            <div className="line"></div>
            <div className="posts">
                <span>

                    <div className="svg"><svg width="20" height="20">
                        <rect x="0" y="0" width="6.6" height="6.6" stroke="black" strokeWidth="0.2" fill="none" />
                        <rect x="6.8" y="0" width="6.6" height="6.6" stroke="black" strokeWidth="0.2" fill="none" />
                        <rect x="13.6" y="0" width="6.6" height="6.6" stroke="black" strokeWidth="0.2" fill="none" />
                        <rect x="0" y="6.8" width="6.6" height="6.6" stroke="black" strokeWidth="0.2" fill="none" />
                        <rect x="6.8" y="6.8" width="6.6" height="6.6" stroke="black" strokeWidth="0.2" fill="none" />
                        <rect x="13.6" y="6.8" width="6.6" height="6.6" stroke="black" strokeWidth="0.2" fill="none" />
                        <rect x="0" y="13.6" width="6.6" height="6.6" stroke="black" strokeWidth="0.2" fill="none" />
                        <rect x="6.8" y="13.6" width="6.6" height="6.6" stroke="black" strokeWidth="0.2" fill="none" />
                        <rect x="13.6" y="13.6" width="6.6" height="6.6" stroke="black" strokeWidth="0.2" fill="none" />
                    </svg></div> Posts</span>

                <div className="postList">
                    <div className="post">
                        <img src="/assets/posts/post_01.jpeg" alt="" />
                        <div className="overlay">
                            <div className="postoverlaycenterItems">
                                <div className="overlaylike">
                                    <img src="/assets/svg/svg_like.png" alt="" />
                                    <span>20</span>
                                </div>
                                <div className="overlaycomment">
                                    <img src="/assets/svg/svg_comment_full.png" alt="" />
                                    <span>20</span>
                                </div>
                            </div>
                        </div>
                    </div>
                  


                </div>
            </div>



        </div>
    )
}

export default Profile
