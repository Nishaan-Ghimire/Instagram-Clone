import React from 'react';
import { useState } from 'react';
import './sidebar.scss';


const Sidebar = () => {

  const [expand,setExpand] = useState(false);
  const toggle = () => {
    setExpand(!expand);
  }
  return (
    <div className='sidebar'>
      <div className="logo">
      
        <img src={`/assets/${expand?'logo1.png':'svg/svg_insta.png'}`} alt="" />
      </div>
    <div className="sidenav">
        <ul>
            <li><img src="/assets/svg/svg_home.png" alt="" /> {expand?'Home':''}</li>
            <li><img src="/assets/svg/svg_search.png" onClick={toggle} alt="" /> {expand?'Search':''}</li>
            <li><img src="/assets/svg/svg_explore.png" alt="" /> {expand?'Explore':''}</li>
            <li><img src="/assets/svg/svg_reels.png" alt="" /> {expand?'Reels':''}</li>
            <li><img src="/assets/svg/svg_message.png" alt="" /> {expand?'Messages':''}</li>
            <li><img src="/assets/svg/svg_notifications.png" alt="" /> {expand?'Notifications':''}</li>
            <li><img src="/assets/svg/svg_create.png" alt="" /> {expand?'Create':''}</li>
            <li><img src="/assets/svg/profile.jpg" alt="" /> {expand?'Profile':''}</li>
        </ul>
    </div>

    <div className="moreOption">
    <img src="/assets/svg/svg_more.png" alt="" />  More
    </div>

    </div>
  )
}

export default Sidebar
