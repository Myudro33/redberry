import React from 'react'
import logo from '../assets/Group.png'
import { Link } from 'react-router-dom'
const NoPage = () => {
  return (
    <div className='flex w-full h-screen justify-center items-center flex-col'>
        <h1 className='text-6xl'>Wrong URL Brother</h1>
        <img className='h-1/3' src={logo} alt="" />
      <Link className='text-2xl underline text-blue-500 mt-10' to={'/'}>უკან დაბრუნება</Link>
    </div>
  )
}

export default NoPage