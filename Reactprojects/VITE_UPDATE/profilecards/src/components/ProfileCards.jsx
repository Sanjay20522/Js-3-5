import React from 'react'

const ProfileCards = ({profile}) => {

    console.log(profile);
    
    
  return (
    <div className='bg-gray-600 text-white p-5 h-100 flex justify-between items-center'>
        {profile.map((e)=>(

            <div classname='bg-text-white p-2 w-50 h-50 rounded text-black' key={e.id}>
                <h1>{e.id}.{e.name}</h1>
                <p>{e.role}</p>


            </div>
        ))}
 



    </div>
  )
}

export default ProfileCards