import React from 'react'
import Post from '../../components/post/Post';
import Accounts from '../../components/accounts/Accounts';
const Feed = () => {
  return (
    <>
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
    </>
  )
}

export default Feed
