'use client'

import './inputtext.sass'

type InputTextType = {
  children: string
  type: string
  onchange: (value: string) => void
  name: string
  style?: string
  backgrou?: string
}

export const InputText = ({
  children,
  type,
  onchange,
  name,
  style,
  backgrou,
}: InputTextType) => {
  return (
    <label className="text" htmlFor={name}>
      <span>{children}</span>
      <input
        style={{ borderBottomColor: backgrou }}
        id={name}
        className={`inputText ${style}`}
        type={type}
        onChange={(e) => onchange(e.target.value)}
      />
    </label>
  )
}
