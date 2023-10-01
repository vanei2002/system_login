'use client'

import { ReactNode, createContext, useContext, useState } from 'react'
import {
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from 'firebase/auth'

import { auth } from '../services/firebase'

interface ContextProps {
  singInFacebook: (value: object) => void
  singInGoogle: (value: object) => void
  registerInGoogle: (value: object) => void
  pageStates: boolean
  setPageStates: (value: boolean) => void
  reset: boolean
  setReset: (value: boolean) => void
  tokenEmail: boolean
  setTokenEmail: (value: boolean) => void
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const GlobalsContext = createContext<ContextProps>(null!)

export const GlobalsContextProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const [reset, setReset] = useState<boolean>(true)
  const [tokenEmail, setTokenEmail] = useState<boolean>(false)

  const [pageStates, setPageStates] = useState<boolean>(true)

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
        console.log(result)
      })
      .catch((err) => console.log(err))
  }

  const registerInGoogle = () => {
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result)
      })
      .catch((err) => console.log(err))
  }
  return (
    <GlobalsContext.Provider
      value={{
        singInFacebook,
        singInGoogle,
        pageStates,
        setPageStates,
        registerInGoogle,

        reset,
        setReset,
        tokenEmail,
        setTokenEmail,
      }}
    >
      {children}
    </GlobalsContext.Provider>
  )
}

export const useGlobalsContext = () => useContext(GlobalsContext)
