import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import './home.scss';
import '../../dark.scss'
import '../../light.scss'

import Feed from '../../components/feed/Feed';
import Profile from '../../components/profile/Profile'
import Explore from '../../components/explore/Explore';
import Reels from '../../components/reels/Reels';
const Home = () => {
  return (
    <div className='homePage lighthome'>
        <div className="left">
      <Sidebar/>
        </div>
    <div className="right">
    {/* <Feed/> */}
   {/* <Profile/> */}
   {/* <Explore/> */}
   <Reels/>
    </div>
    </div>
  )
}

export default Home
