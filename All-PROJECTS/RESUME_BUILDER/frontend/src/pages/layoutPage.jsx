import React from 'react'
import { Outlet } from 'react-router-dom'

const LayoutPage = () => {
  return (
    <>
    <div>layoutPage</div>
    <div>
        <Outlet />
    </div>
    </>
  )
}

export default LayoutPage