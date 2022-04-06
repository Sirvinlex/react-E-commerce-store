import React, { useContext, useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const UserContext = React.createContext()
export const UserProvider = ({ children }) => {
  // const {isAuthenticated, loginWithRedirect, logout, user, isLoading} = useAuth0()
 const [isLoggedIn, setIsLoggedIn] = useState(null);
 const [myUser, setMyUser] = useState(null)
 useEffect(() =>{
    if(isLoggedIn){
      setMyUser(true)
    }
    else{
      setMyUser(false)
    }
  }, [isLoggedIn])
  return (
    <UserContext.Provider value={{isLoggedIn, setIsLoggedIn, myUser}}>{children}</UserContext.Provider>
  )
}
// make sure use
export const useUserContext = () => {
  return useContext(UserContext)
}
