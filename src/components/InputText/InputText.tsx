import React from 'react'
import './inputtext.sass'
import { UseFormRegister } from 'react-hook-form'

type InputTextType = {
  children: string
  type: string
  name: string
  style?: string
  backgrou?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>
}

export const InputText = ({
  children,
  type,
  name,
  style,
  backgrou,
  register,
}: InputTextType) => {
  return (
    <label className="text" htmlFor={name}>
      <span>{children}</span>
      <input
        style={{ borderBottomColor: backgrou }}
        id={name}
        className={`inputText ${style}`}
        type={type}
        {...register(name)} // Use register diretamente aqui
      />
    </label>
  )
}
