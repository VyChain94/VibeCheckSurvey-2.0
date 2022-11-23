import React from 'react'
import Survey from './components/Survey'
import Header from './components/Header'
// import Signup from './components/Signup'
// import Signin from './components/Signin'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
      {/* <Route path="/" element={<Signin />} />
      <Route path="/signup" element={<Signup />} /> */}
      <Route path="/" element={<Survey />} />
      </Routes>
    </div>
  )
}

export default App