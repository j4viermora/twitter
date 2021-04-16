import { onAuthStateChanged } from "firebase/client";
import { useState, useEffect } from "react"
import { useRouter } from 'next/router'


export const USER_STATE = {
    NOT_LOGGED: null,
    NOT_KNOW: undefined
}

export const useUser = () => {
    
    const router = useRouter() 
    const [ user, setUser ] =  useState(USER_STATE.NOT_KNOW);
      
      useEffect(() => {
        onAuthStateChanged(setUser)
      }, []);

      useEffect( () => {

        user === USER_STATE.NOT_LOGGED && router.push('/')

      }, [ user ] )

      return user
      
  }