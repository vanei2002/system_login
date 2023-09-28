'use client'

import './authpage.sass'

type AuthTypes = {
  backgrounds: string
  functionAuth: (value: object) => void
  images: string
  altImages: string
  colorText: string
  children: string
  style?: string
}

export const Authpage = ({
  backgrounds,
  functionAuth,
  images,
  altImages,
  colorText,
  children,
  style,
}: AuthTypes) => {
  return (
    <div
      style={{ background: backgrounds }}
      className={`container ${style}`}
      onClick={functionAuth}
    >
      <div className="auth">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={images} alt={altImages} />
      </div>
      <p style={{ color: colorText }}>{children}</p>
    </div>
  )
}
