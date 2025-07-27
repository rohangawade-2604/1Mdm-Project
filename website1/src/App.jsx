

import './App.css'
import Footer from './Footer_Component/Footer'
import { Copyright } from './Copyright_Compo/Copyright'
import Home from './HomePage_Component/Home'
import { Route, Routes } from 'react-router-dom'


function App() {


  return (
    <>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path=''/>
      <Route path=''/>
      <Route path=''/>
    </Routes>
    

    {/* <Home/> */}
    <Footer/>
    <Copyright/>
     
    </>
  )
}

export default App
