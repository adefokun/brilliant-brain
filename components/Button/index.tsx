import React from 'react'

interface Props {
    children: React.ReactNode;
    className?: string;
    gradient?: 'grad-to-right' | 'grad-to-bottom';
}

const Button = ({ children, className, gradient }: Props) => {
  return (
    <button className={`${gradient ? gradient : "grad-to-right"}  ${className ? className : "text-white px-6 py-4 rounded-lg"}`}>
        {children}
    </button>
  )
}

export default Button