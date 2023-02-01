import React from 'react';
import './accounts.scss';
const Accounts = () => {
  return (
    <div className="myAccount">
    <div className="profile">
    <div className="profileImage">
     <img src="/assets/svg/profile.jpg" alt="" />
     </div>
     <div className="profileName">
        <span className='username'>_nishaann_</span>
        <span className='fullname'>Here to bring change</span>
     </div>
    
    </div>
    <div className="switchBtn">
        <span>Switch</span>
     </div>
    </div>
  )
}

export default Accounts
