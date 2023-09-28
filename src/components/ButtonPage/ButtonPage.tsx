'use client'
import './buttonpage.sass'

type ButtonType = {
  value: string
  onclick: () => void
}

export const ButtonPage = ({ value, onclick }: ButtonType) => {
  return (
    <button className="styleButton" onClick={onclick}>
      {value}
    </button>
  )
}
