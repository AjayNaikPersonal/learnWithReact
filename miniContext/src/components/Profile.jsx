import React,{useState,useContext} from 'react'
import userContext from '../context/UserContext'


function Profile() {

  const {user} = useContext(userContext)
  if(!user) return <div> please login</div>
  return <p>Hello Welcome {user.username}</p>
}

export default Profile