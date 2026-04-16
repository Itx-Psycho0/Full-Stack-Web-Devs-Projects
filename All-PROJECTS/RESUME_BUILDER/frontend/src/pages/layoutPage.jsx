import React from 'react'
import { Outlet } from 'react-router-dom'

const layoutPage = () => {
  return (
    <>
    <div>layoutPage</div>
    <div>
        <Outlet />
    </div>
    </>
  )
}

export default layoutPage