import React from 'react'

export default function Container({ children, className = '', as: Tag = 'div', ...props }) {
  return (
    <Tag
      className={`mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 ${className}`}
      {...props}
    >
      {children}
    </Tag>
  )
}
