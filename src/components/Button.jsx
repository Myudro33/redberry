import React from 'react'

const Button = ({title,styyle,click}) => {
  return (
    <button onClick={click} style={{fontFamily:'Helvetica'}} className={`bg-[#62A1EB] h-10 rounded-md ${styyle} text-white text-sm`}>
        {title}
    </button>
  )
}

export default Button