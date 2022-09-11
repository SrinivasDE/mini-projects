import React from 'react';
import NavBar from './components/navigation/NavBar';
import Home from './screens/Home';
import { Route, Routes } from 'react-router-dom';
import About from './screens/About';
import Orders from './screens/Orders';


const App = () => {
  return (
    <div>
      <NavBar/>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/> } />
      <Route path='/orders' element={<Orders/>} />

      </Routes>
      
    </div>
  )
}

export default App;