'use client'

import { createContext, useContext } from 'react'

import {
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from 'firebase/auth'

import { auth } from '../config/firebase'

interface ContextProps {
  singInFacebook: (value: object) => void
  singInGoogle: (value: object) => void
}

const GlobalsContext = createContext<ContextProps>(null!)

export const GlobalsContextProvider = ({ children }) => {
  const singInFacebook = () => {
    const provider = new FacebookAuthProvider()
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user.email)
      })
      .catch((err) => console.log(err))
  }

  const singInGoogle = () => {
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user.email)
      })
      .catch((err) => console.log(err))
  }
  return (
    <GlobalsContext.Provider
      value={{
        singInFacebook,
        singInGoogle,
      }}
    >
      {children}
    </GlobalsContext.Provider>
  )
}

export const useGlobalsContext = () => useContext(GlobalsContext)