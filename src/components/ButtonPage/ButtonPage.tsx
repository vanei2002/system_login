'use client'
import './buttonpage.sass'

type ButtonType = {
  value: string
  onclick: () => void
  backgrou?: string
}

export const ButtonPage = ({ backgrou, value, onclick }: ButtonType) => {
  return (
    <button
      style={{ background: backgrou }}
      className="styleButton"
      onClick={onclick}
    >
      {value}
    </button>
  )
}
