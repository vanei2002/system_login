'use client'
import { AuthUser } from '@/components/AuthUser/authUser'
import { useGlobalsContext } from '@/context/GlobalsContext'

export default function Home() {
  const { singInGoogle } = useGlobalsContext()
  return (
    <main>
      <AuthUser />
      <button onClick={singInGoogle}>Ola</button>
    </main>
  )
}
