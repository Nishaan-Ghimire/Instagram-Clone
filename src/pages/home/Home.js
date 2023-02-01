import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import './home.scss';
import '../../dark.scss'
import '../../light.scss'
import Post from '../../components/post/Post';
import Accounts from '../../components/accounts/Accounts';
const Home = () => {
  return (
    <div className='homePage lighthome'>
        <div className="left">
      <Sidebar/>
        </div>
    <div className="right">
      <div className="posts">
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      </div>
      <div className="accountSide">
      <div className="accountpos">
     <Accounts/>

      </div>
      </div>
   
    </div>
    </div>
  )
}

export default Home
