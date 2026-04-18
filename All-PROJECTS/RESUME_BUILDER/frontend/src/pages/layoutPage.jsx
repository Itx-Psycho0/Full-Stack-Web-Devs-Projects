import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar'

const LayoutPage = () => {
  return (
    <>
      <div className='min-h-screen bg-gray-50'>
        <Navbar />
        <Outlet />
      </div>
    </>
  )
}

export default LayoutPage