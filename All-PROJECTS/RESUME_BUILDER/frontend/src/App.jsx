import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/homePage'
import LoginPage from './pages/loginPAge'
import LayoutPage from './pages/layoutPage'
import DashboardPage from './pages/dashboadPage'
import ResumeBuilderPage from './pages/resumeBuilderPage'
import PreviewPage from './pages/previewPage'


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/app' element={<LayoutPage />}>
        <Route index element={<DashboardPage />} />
        <Route path='builder/:id' element={<ResumeBuilderPage />} />
        <Route path='view/:id' element={<PreviewPage />} />
      </Route>
    </Routes>
  )
}

export default App