import React from 'react';
import './sidebar.scss';


const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="logo">
        <img src="/assets/logo1.png" alt="" />
      </div>
    <div className="sidenav">
        <ul>
            <li><img src="/assets/svg/svg_home.png" alt="" /> Home</li>
            <li><img src="/assets/svg/svg_search.png" alt="" /> Search</li>
            <li><img src="/assets/svg/svg_explore.png" alt="" /> Explore</li>
            <li><img src="/assets/svg/svg_reels.png" alt="" /> Reels</li>
            <li><img src="/assets/svg/svg_message.png" alt="" /> Messages</li>
            <li><img src="/assets/svg/svg_notifications.png" alt="" /> Notifications</li>
            <li><img src="/assets/svg/svg_create.png" alt="" /> Create</li>
            <li><img src="/assets/svg/profile.jpg" alt="" /> Profile</li>
        </ul>
    </div>

    <div className="moreOption">
    <img src="/assets/svg/svg_more.png" alt="" />  More
    </div>

    </div>
  )
}

export default Sidebar
