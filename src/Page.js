import React from 'react'
import Project from './Screen/Project'
import About from './Screen/About'
import Contactus from './Screen/Contactus'
import Home from './Screen/Home'
import { Route, Routes } from 'react-router-dom';
import ProjectShown from './Screen/ProjectShown'

function Page() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/Contactus" element={<Contactus />} />
          <Route path="/ProjectShown" element={<ProjectShown />} />
        </Routes>
    </div>
  )
}

export default Page
