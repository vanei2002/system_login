'use client'
import './buttonpage.sass'

type ButtonType = {
  value: string
  onclick?: () => void
  backgrou?: string
  type?: 'button' | 'reset' | 'submit'
}

export const ButtonPage = ({ backgrou, value, onclick, type }: ButtonType) => {
  return (
    <button
      style={{ background: backgrou }}
      className="styleButton"
      onClick={onclick}
      type={type}
    >
      {value}
    </button>
  )
}
