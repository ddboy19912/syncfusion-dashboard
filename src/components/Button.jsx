import React from 'react'

const Button = ({color, bgColor, text, borderRadius, size}) => {
  return (
    <button type="button" style={{backgroundColor: bgColor, borderRadius, color}} className={`p-3 hover:drop-shadow-xl text-${size}`}>
    {text}
    </button>
  )
}

export default Button