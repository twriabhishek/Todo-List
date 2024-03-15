import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
  const {user} = useContext(UserContext);

  if(!user) return <div>User Not Found</div>
  return <div>Please Login User Found {user.username} and Password  {user.email} </div>
}

export default Profile
