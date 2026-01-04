import React, { useState } from 'react'
import ProfileCards from './ProfileCards.jsx'
const ProfileList = () => {

    const [userProfile] = useState([
        {id:1, name:"Alice", role:"Developer"},
        {id:2, name:"Bob", role:"Designer"},
        {id:3, name:"Charlie", role:"Product Manager"}
    ]);

  return (
    <div>
        <ProfileCards profile={userProfile}/>
        </div>
        
  )
}

export default ProfileList