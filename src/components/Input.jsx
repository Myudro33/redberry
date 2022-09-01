import React from 'react'

const Input = ({type,styyle,placeholder}) => {
  return (
    <input  type={type} placeholder={placeholder} className={`${styyle} border-[2px] p-2  rounded-md focus:border-[#62A1EB] border-[#62A1EB] focus:outline-[#62A1EB]`} />
  )
}

export default Input