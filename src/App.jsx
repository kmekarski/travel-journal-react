import React from 'react'
import Navbar from './components/Navbar'
import MainContent from './components/MainContent'
import './App.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add( fas )

function App() {

  return (
    <div className="container">
      <Navbar></Navbar>
      <MainContent></MainContent>
    </div>
  )
}

export default App
