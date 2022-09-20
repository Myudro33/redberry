import React from 'react'
import logo from '../assets/Group.png'
const NoPage = () => {
  return (
    <div className='flex w-full h-screen justify-center items-center flex-col'>
        <h1 className='text-6xl'>Wrong URL Brother</h1>
        <img className='h-1/3' src={logo} alt="" />
    </div>
  )
}

export default NoPage