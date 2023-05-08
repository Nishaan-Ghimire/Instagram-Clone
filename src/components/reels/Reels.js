import React from 'react'
import './reels.scss'
import Accounts from '../accounts/Accounts'
const Reels = () => {
    return (
        <div className='reelsSection'>
            <div className="reelsList">
                <div className="reel">
                    <video width='450px' height='600px'>
                        <source src="/assets/reels/reel_01.mp4" type='video/mp4' />
                    </video>
                    <div className="reel_btns">
                        <div></div>
                        <div className="reactions">
                            <div className="like">
                                <img src="/assets/svg/svg_notifications.png" alt="" />
                                <span>20</span>
                            </div>
                            <div className="comment">
                                <img src="/assets/svg/svg_comment.png" alt="" />
                                <span>20</span>
                            </div>
                            <div className="share">
                                <img src="/assets/svg/svg_share.png" alt="" />
                            </div>

                        </div>
                        <div className="profile_pic_reel">
                            <img src='/assets/svg/profile.jpg' alt='Profile' />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Reels