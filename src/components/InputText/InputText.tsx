'use client'

import './inputtext.sass'

type InputTextType = {
  children: string
  type: string
  onchange: (value: string) => void
  name: string
  style?: string
}

export const InputText = ({
  children,
  type,
  onchange,
  name,
  style,
}: InputTextType) => {
  return (
    <label className="text" htmlFor={name}>
      <span>{children}</span>
      <input
        className={`inputText ${style}`}
        type={type}
        onChange={(e) => onchange(e.target.value)}
      />
    </label>
  )
}
